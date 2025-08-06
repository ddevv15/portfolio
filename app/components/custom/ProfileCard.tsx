import React, {
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useState,
  CSSProperties,
  MouseEvent,
} from "react";
import "./ProfileCard.css";

const DEFAULT_BEHIND_GRADIENT =
  "radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(320,100%,85%,var(--card-opacity)) 4%,hsla(180,80%,75%,calc(var(--card-opacity)*0.75)) 10%,hsla(240,60%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(300,40%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#ff00aac4 0%,#00ff7300 100%),radial-gradient(100% 100% at 50% 50%,#ff00c1ff 1%,#7300ff00 76%),conic-gradient(from 180deg at 50% 50%,#ff37c1ff 0%,#00c6ffff 25%,#c1ff00ff 50%,#ff0073ff 75%,#ff37c1ff 100%)";

const DEFAULT_INNER_GRADIENT = "none";

// Generate a grain texture pattern
const generateGrainPattern = (): string => {
  const canvas = document.createElement("canvas");
  canvas.width = 200;
  canvas.height = 200;
  const ctx = canvas.getContext("2d");
  
  if (!ctx) return "";

  const imageData = ctx.createImageData(200, 200);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    const noise = Math.random() * 255;
    data[i] = noise; // Red
    data[i + 1] = noise; // Green
    data[i + 2] = noise; // Blue
    data[i + 3] = Math.random() * 50; // Alpha (transparency)
  }

  ctx.putImageData(imageData, 0, 0);
  return canvas.toDataURL();
};

const ANIMATION_CONFIG = {
  SMOOTH_DURATION: 600,
  INITIAL_DURATION: 1500,
  INITIAL_X_OFFSET: 70,
  INITIAL_Y_OFFSET: 60,
};

const clamp = (value: number, min = 0, max = 100): number =>
  Math.min(Math.max(value, min), max);

const round = (value: number, precision = 3): number => 
  parseFloat(value.toFixed(precision));

const adjust = (value: number, fromMin: number, fromMax: number, toMin: number, toMax: number): number =>
  round(toMin + ((toMax - toMin) * (value - fromMin)) / (fromMax - fromMin));

const easeInOutCubic = (x: number): number =>
  x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;

interface ProfileCardProps {
  avatarUrl?: string;
  grainUrl?: string;
  behindGradient?: string;
  innerGradient?: string;
  showBehindGradient?: boolean;
  className?: string;
  enableTilt?: boolean;
  miniAvatarUrl?: string;
  name?: string;
  title?: string;
  handle?: string;
  status?: string;
  contactText?: string;
  showUserInfo?: boolean;
  onContactClick?: () => void;
}

interface AnimationHandlers {
  onMouseEnter: (event: MouseEvent<HTMLDivElement>) => void;
  onMouseMove: (event: MouseEvent<HTMLDivElement>) => void;
  onMouseLeave: () => void;
}

const ProfileCardComponent: React.FC<ProfileCardProps> = ({
  avatarUrl = "<Placeholder for avatar URL>",
  grainUrl,
  behindGradient,
  innerGradient,
  showBehindGradient = true,
  className = "",
  enableTilt = true,
  miniAvatarUrl,
  name = "Dev Shah",
  title = "Software Engineer",
  handle = "ddevv15",
  status = "Online",
  contactText = "Contact",
  showUserInfo = true,
  onContactClick,
}) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [grainPattern, setGrainPattern] = useState<string | null>(null);

  // Generate grain pattern on mount
  useEffect(() => {
    setGrainPattern(generateGrainPattern());
  }, []);

  const animationHandlers = useMemo((): AnimationHandlers | null => {
    if (!enableTilt) return null;

    let rafId: number | null = null;

    const updateCardTransform = (offsetX: number, offsetY: number, card: HTMLElement, wrap: HTMLElement): void => {
      const width = card.clientWidth;
      const height = card.clientHeight;

      const percentX = clamp((100 / width) * offsetX);
      const percentY = clamp((100 / height) * offsetY);

      const centerX = percentX - 50;
      const centerY = percentY - 50;

      const properties: Record<string, string> = {
        "--pointer-x": `${percentX}%`,
        "--pointer-y": `${percentY}%`,
        "--background-x": `${adjust(percentX, 0, 100, 35, 65)}%`,
        "--background-y": `${adjust(percentY, 0, 100, 35, 65)}%`,
        "--pointer-from-center": `${clamp(
          Math.hypot(percentY - 50, percentX - 50) / 50,
          0,
          1
        )}`,
        "--pointer-from-top": `${percentY / 100}`,
        "--pointer-from-left": `${percentX / 100}`,
        "--rotate-x": `${round(-(centerX / 5))}deg`,
        "--rotate-y": `${round(centerY / 4)}deg`,
      };

      Object.entries(properties).forEach(([property, value]) => {
        wrap.style.setProperty(property, value);
      });
    };

    const createSmoothAnimation = (
      duration: number,
      startX: number,
      startY: number,
      card: HTMLElement,
      wrap: HTMLElement
    ): void => {
      const startTime = performance.now();
      const targetX = wrap.clientWidth / 2;
      const targetY = wrap.clientHeight / 2;

      const animate = (currentTime: number): void => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeInOutCubic(progress);

        const currentX = startX + (targetX - startX) * easedProgress;
        const currentY = startY + (targetY - startY) * easedProgress;

        updateCardTransform(currentX, currentY, card, wrap);

        if (progress < 1) {
          rafId = requestAnimationFrame(animate);
        }
      };

      rafId = requestAnimationFrame(animate);
    };

    return {
      onMouseEnter: (event: MouseEvent<HTMLDivElement>): void => {
        const card = cardRef.current;
        const wrap = wrapRef.current;
        if (!card || !wrap) return;

        const rect = card.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;

        wrap.style.setProperty("--card-opacity", "1");
        updateCardTransform(offsetX, offsetY, card, wrap);
      },

      onMouseMove: (event: MouseEvent<HTMLDivElement>): void => {
        const card = cardRef.current;
        const wrap = wrapRef.current;
        if (!card || !wrap) return;

        const rect = card.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;

        updateCardTransform(offsetX, offsetY, card, wrap);
      },

      onMouseLeave: (): void => {
        const card = cardRef.current;
        const wrap = wrapRef.current;
        if (!card || !wrap) return;

        wrap.style.setProperty("--card-opacity", "0");

        if (rafId) {
          cancelAnimationFrame(rafId);
        }

        createSmoothAnimation(
          ANIMATION_CONFIG.SMOOTH_DURATION,
          parseFloat(wrap.style.getPropertyValue("--pointer-x")) || 50,
          parseFloat(wrap.style.getPropertyValue("--pointer-y")) || 50,
          card,
          wrap
        );
      },
    };
  }, [enableTilt]);

  // Initialize card position
  useEffect(() => {
    const card = cardRef.current;
    const wrap = wrapRef.current;
    if (!card || !wrap || !enableTilt || !animationHandlers) return;

    wrap.style.setProperty("--card-opacity", "0");
    
    const rect = wrap.getBoundingClientRect();
    const initialX = rect.width / 2 + ANIMATION_CONFIG.INITIAL_X_OFFSET;
    const initialY = rect.height / 2 + ANIMATION_CONFIG.INITIAL_Y_OFFSET;

    // Access the internal functions from animation handlers
    const updateCardTransform = (offsetX: number, offsetY: number, card: HTMLElement, wrap: HTMLElement): void => {
      const width = card.clientWidth;
      const height = card.clientHeight;

      const percentX = clamp((100 / width) * offsetX);
      const percentY = clamp((100 / height) * offsetY);

      const centerX = percentX - 50;
      const centerY = percentY - 50;

      const properties: Record<string, string> = {
        "--pointer-x": `${percentX}%`,
        "--pointer-y": `${percentY}%`,
        "--background-x": `${adjust(percentX, 0, 100, 35, 65)}%`,
        "--background-y": `${adjust(percentY, 0, 100, 35, 65)}%`,
        "--pointer-from-center": `${clamp(
          Math.hypot(percentY - 50, percentX - 50) / 50,
          0,
          1
        )}`,
        "--pointer-from-top": `${percentY / 100}`,
        "--pointer-from-left": `${percentX / 100}`,
        "--rotate-x": `${round(-(centerX / 5))}deg`,
        "--rotate-y": `${round(centerY / 4)}deg`,
      };

      Object.entries(properties).forEach(([property, value]) => {
        wrap.style.setProperty(property, value);
      });
    };

    const createSmoothAnimation = (
      duration: number,
      startX: number,
      startY: number,
      card: HTMLElement,
      wrap: HTMLElement
    ): void => {
      const startTime = performance.now();
      const targetX = wrap.clientWidth / 2;
      const targetY = wrap.clientHeight / 2;

      const animate = (currentTime: number): void => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeInOutCubic(progress);

        const currentX = startX + (targetX - startX) * easedProgress;
        const currentY = startY + (targetY - startY) * easedProgress;

        updateCardTransform(currentX, currentY, card, wrap);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    updateCardTransform(initialX, initialY, card, wrap);

    const timer = setTimeout(() => {
      createSmoothAnimation(
        ANIMATION_CONFIG.INITIAL_DURATION,
        initialX,
        initialY,
        card,
        wrap
      );
    }, 100);

    return () => clearTimeout(timer);
  }, [enableTilt, animationHandlers]);

  const cardStyle: CSSProperties = {
    background: showBehindGradient
      ? behindGradient || DEFAULT_BEHIND_GRADIENT
      : "transparent",
  };

  const innerStyle: CSSProperties = {
    background: innerGradient || DEFAULT_INNER_GRADIENT,
    backgroundImage: grainPattern ? `url(${grainPattern})` : undefined,
  };

  return (
    <div
      ref={wrapRef}
      className={`profile-card-wrap ${className}`.trim()}
      {...(animationHandlers || {})}
    >
      <div
        ref={cardRef}
        className="profile-card"
        style={cardStyle}
      >
        <div className="profile-card-inner" style={innerStyle}>
          <div className="profile-card-content">
            <div className="profile-header">
              <img
                src={avatarUrl}
                alt={`${name} avatar`}
                className="profile-avatar"
              />
              {showUserInfo && (
                <div className="profile-info">
                  <h3 className="profile-name">{name}</h3>
                  <p className="profile-title">{title}</p>
                  <p className="profile-handle">@{handle}</p>
                  <p className="profile-status">{status}</p>
                </div>
              )}
            </div>
            {onContactClick && (
              <button
                onClick={onContactClick}
                className="profile-contact-btn"
                type="button"
              >
                {contactText}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCardComponent;