import React from "react";
import {
  siNextdotjs,
  siTypescript,
  siStripe,
  siPostgresql,
  siPrisma,
  siResend,
  siCloudinary,
  siTailwindcss,
  siDotnet,
  siDocker,
  siNginx,
  siNvidia,
} from "simple-icons";
import { Flex, Text } from "@once-ui-system/core";
import type { SimpleIcon } from "simple-icons";

const SI_MAP: Record<string, SimpleIcon> = {
  "Next.js": siNextdotjs,
  "TypeScript": siTypescript,
  "Stripe": siStripe,
  "PostgreSQL": siPostgresql,
  "Prisma": siPrisma,
  "Resend": siResend,
  "Cloudinary": siCloudinary,
  "Tailwind CSS": siTailwindcss,
  "ASP.NET Core": siDotnet,
  "Docker": siDocker,
  "Nginx": siNginx,
  "NVIDIA": siNvidia,
};

interface CustomIconProps {
  size: number;
}

function CSharpIcon({ size }: CustomIconProps): React.ReactElement {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <path d="M17 5.5A9 9 0 1 0 17 18.5" />
      <line x1="18.5" y1="9" x2="23" y2="9" />
      <line x1="18.5" y1="13" x2="23" y2="13" />
      <line x1="20" y1="7" x2="19.2" y2="15" />
      <line x1="22" y1="7" x2="21.2" y2="15" />
    </svg>
  );
}

function CleanArchitectureIcon({ size }: CustomIconProps): React.ReactElement {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="10.5" />
      <circle cx="12" cy="12" r="6.5" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

function CQRSIcon({ size }: CustomIconProps): React.ReactElement {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="2" x2="12" y2="10" />
      <line x1="12" y1="10" x2="5" y2="20" />
      <line x1="12" y1="10" x2="19" y2="20" />
      <polyline points="3,18 5,20 7,18" />
      <polyline points="17,18 19,20 21,18" />
    </svg>
  );
}

function EFCoreIcon({ size }: CustomIconProps): React.ReactElement {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="1" y="1.5" width="9" height="8" rx="1.5" />
      <rect x="14" y="14.5" width="9" height="8" rx="1.5" />
      <path d="M10 5.5C13 5.5 11 18.5 14 18.5" />
      <polyline points="12,16.5 14,18.5 16,16.5" />
    </svg>
  );
}

const CUSTOM_MAP: Record<string, (props: CustomIconProps) => React.ReactElement> = {
  "C#": CSharpIcon,
  "Clean Architecture": CleanArchitectureIcon,
  "CQRS/MediatR": CQRSIcon,
  "Entity Framework Core": EFCoreIcon,
};

interface TechStackProps {
  stack: string[];
}

export function TechStack({ stack }: TechStackProps): React.ReactElement {
  return (
    <Flex wrap gap="8" horizontal="center">
      {stack.map((tech) => {
        const siIcon = SI_MAP[tech];
        const CustomIcon = CUSTOM_MAP[tech];

        return (
          <Flex
            key={tech}
            gap="8"
            vertical="center"
            paddingX="12"
            paddingY="4"
            radius="s"
            border="neutral-medium"
            background="neutral-alpha-weak"
          >
            {siIcon && (
              <svg
                role="img"
                aria-label={siIcon.title}
                viewBox="0 0 24 24"
                width={14}
                height={14}
                style={{ fill: "currentColor", flexShrink: 0 }}
              >
                <path d={siIcon.path} />
              </svg>
            )}
            {CustomIcon && <CustomIcon size={14} />}
            <Text variant="label-default-xs" onBackground="neutral-medium">
              {tech}
            </Text>
          </Flex>
        );
      })}
    </Flex>
  );
}
