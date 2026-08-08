import type { SVGProps } from "react";

import type { IconName } from "@/types/portfolio";

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number;
  title?: string;
};

export function Icon({ name, size = 18, title, ...props }: IconProps) {
  const shared = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.7,
  };

  return (
    <svg
      aria-hidden={title ? undefined : true}
      aria-label={title}
      height={size}
      role={title ? "img" : undefined}
      viewBox="0 0 24 24"
      width={size}
      {...props}
    >
      {name === "arrow-up-right" ? <path {...shared} d="M5 19 19 5M8 5h11v11" /> : null}
      {name === "mail" ? <><rect {...shared} height="15" rx="2" width="19" x="2.5" y="4.5" /><path {...shared} d="m3 6 9 7 9-7" /></> : null}
      {name === "phone" ? <path {...shared} d="M7.4 3.5 5 4.8c-1.1.6-1.5 1.9-1 3.1 2.1 5.5 6.6 10 12.1 12.1 1.2.5 2.5.1 3.1-1l1.3-2.4-4.1-2.4-1.6 1.7a14.5 14.5 0 0 1-4.7-4.7l1.7-1.6-2.4-4.1Z" /> : null}
      {name === "map-pin" ? <><path {...shared} d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle {...shared} cx="12" cy="10" r="2.2" /></> : null}
      {name === "download" ? <><path {...shared} d="M12 3v12m0 0 4-4m-4 4-4-4M4 20h16" /></> : null}
      {name === "briefcase" ? <><rect {...shared} height="13" rx="2" width="18" x="3" y="7" /><path {...shared} d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7M3 12h18M10 12v2h4v-2" /></> : null}
      {name === "automation" ? <><path {...shared} d="M4 7h7m2 0h7M4 17h3m2 0h11" /><circle {...shared} cx="11" cy="7" r="2" /><circle {...shared} cx="7" cy="17" r="2" /></> : null}
      {name === "embedded" ? <><rect {...shared} height="12" rx="1.5" width="12" x="6" y="6" /><path {...shared} d="M9 2v4m6-4v4m-6 12v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4M9 9h6v6H9z" /></> : null}
      {name === "code" ? <><path {...shared} d="m8 9-3 3 3 3m8-6 3 3-3 3M14 6l-4 12" /></> : null}
      {name === "software" ? <><path {...shared} d="m8 9-3 3 3 3m8-6 3 3-3 3M14 6l-4 12" /></> : null}
      {name === "networking" ? <><circle {...shared} cx="5" cy="12" r="2.5" /><circle {...shared} cx="18" cy="6" r="2.5" /><circle {...shared} cx="18" cy="18" r="2.5" /><path {...shared} d="m7.3 11 8.4-4m-8.4 6 8.4 4" /></> : null}
      {name === "target" ? <><circle {...shared} cx="12" cy="12" r="8" /><circle {...shared} cx="12" cy="12" r="3" /><path {...shared} d="M12 2v3m0 14v3M2 12h3m14 0h3" /></> : null}
      {name === "list" ? <><path {...shared} d="M8 6h12M8 12h12M8 18h12" /><circle cx="4" cy="6" fill="currentColor" r="1" /><circle cx="4" cy="12" fill="currentColor" r="1" /><circle cx="4" cy="18" fill="currentColor" r="1" /></> : null}
      {name === "check-circle" ? <><circle {...shared} cx="12" cy="12" r="9" /><path {...shared} d="m8 12 2.5 2.5L16 9" /></> : null}
      {name === "layers" ? <><path {...shared} d="m12 3 8 4-8 4-8-4 8-4Z" /><path {...shared} d="m4 12 8 4 8-4M4 17l8 4 8-4" /></> : null}
      {name === "tag" ? <path {...shared} d="M4 5v6l9 9 6-6-9-9H4Zm4 3h.01" /> : null}
    </svg>
  );
}
