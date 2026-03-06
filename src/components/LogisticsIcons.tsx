'use client';

import React from 'react';

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

/**
 * Premium Logistics Icons matching AfriBridge brand identity
 * Colors: Navy #0B1F3A, Emerald #1E6B4C, Gold #F5B041
 */

export function CustomsClearingIcon({
  size = 48,
  color = '#0B1F3A',
  className = '',
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
    >
      <rect x="6" y="8" width="36" height="32" rx="2" fill="none" stroke={color} strokeWidth="2" />
      <path d="M6 20h36" stroke={color} strokeWidth="2" />
      <rect x="14" y="12" width="20" height="6" fill={color} opacity="0.3" />
      <circle cx="24" cy="32" r="2" fill={color} />
    </svg>
  );
}

export function FreightForwardingIcon({
  size = 48,
  color = '#0B1F3A',
  className = '',
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
    >
      <rect x="4" y="18" width="40" height="20" rx="2" fill="none" stroke={color} strokeWidth="2" />
      <path d="M12 18V10h24v8" stroke={color} strokeWidth="2" />
      <circle cx="14" cy="36" r="3" fill={color} />
      <circle cx="34" cy="36" r="3" fill={color} />
      <path d="M44 24v4" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function WarehouseIcon({
  size = 48,
  color = '#0B1F3A',
  className = '',
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
    >
      <path d="M4 18L24 8L44 18V40H4V18Z" stroke={color} strokeWidth="2" fill="none" />
      <line x1="4" y1="28" x2="44" y2="28" stroke={color} strokeWidth="1.5" />
      <rect x="10" y="20" width="8" height="8" stroke={color} strokeWidth="1.5" fill="none" />
      <rect x="30" y="20" width="8" height="8" stroke={color} strokeWidth="1.5" fill="none" />
      <rect x="10" y="30" width="8" height="8" stroke={color} strokeWidth="1.5" fill="none" />
      <rect x="30" y="30" width="8" height="8" stroke={color} strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export function TrackingIcon({
  size = 48,
  color = '#0B1F3A',
  className = '',
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
    >
      <rect x="8" y="10" width="32" height="28" rx="2" fill="none" stroke={color} strokeWidth="2" />
      <path d="M8 18h32" stroke={color} strokeWidth="1.5" />
      <circle cx="16" cy="29" r="2" fill={color} opacity="0.5" />
      <circle cx="24" cy="29" r="2" fill={color} opacity="0.75" />
      <circle cx="32" cy="29" r="2" fill={color} />
      <line x1="24" y1="10" x2="24" y2="6" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function CargoIcon({
  size = 48,
  color = '#0B1F3A',
  className = '',
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
    >
      {/* Container stack */}
      <rect x="8" y="18" width="14" height="12" stroke={color} strokeWidth="2" fill="none" />
      <rect x="26" y="10" width="14" height="12" stroke={color} strokeWidth="2" fill="none" />
      <rect x="8" y="32" width="14" height="12" stroke={color} strokeWidth="2" fill="none" />
      <rect x="26" y="24" width="14" height="12" stroke={color} strokeWidth="2" fill="none" />
      {/* Straps */}
      <line x1="12" y1="8" x2="12" y2="44" stroke={color} strokeWidth="1" opacity="0.5" />
      <line x1="30" y1="8" x2="30" y2="44" stroke={color} strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

export function BorderProcessingIcon({
  size = 48,
  color = '#0B1F3A',
  className = '',
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
    >
      {/* Gate structure */}
      <line x1="12" y1="10" x2="12" y2="40" stroke={color} strokeWidth="2" />
      <line x1="36" y1="10" x2="36" y2="40" stroke={color} strokeWidth="2" />
      <line x1="12" y1="15" x2="36" y2="15" stroke={color} strokeWidth="2" />
      <line x1="12" y1="25" x2="36" y2="25" stroke={color} strokeWidth="2" />
      <line x1="12" y1="40" x2="36" y2="40" stroke={color} strokeWidth="2" />
      {/* Checkpoint marks */}
      <circle cx="24" cy="20" r="2" fill={color} />
      <circle cx="24" cy="32" r="2" fill={color} />
    </svg>
  );
}

export function ShipmentIcon({
  size = 48,
  color = '#0B1F3A',
  className = '',
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
    >
      {/* Package */}
      <path
        d="M8 18L24 10L40 18V36H8V18Z"
        stroke={color}
        strokeWidth="2"
        fill="none"
      />
      <line x1="24" y1="10" x2="24" y2="27" stroke={color} strokeWidth="1.5" />
      <line x1="8" y1="18" x2="24" y2="27" stroke={color} strokeWidth="1.5" />
      <line x1="40" y1="18" x2="24" y2="27" stroke={color} strokeWidth="1.5" />
      {/* Delivery arrow */}
      <path
        d="M32 38L38 38L35 42L32 38"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

export function ComplianceIcon({
  size = 48,
  color = '#0B1F3A',
  className = '',
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
    >
      {/* Document */}
      <rect x="10" y="6" width="20" height="32" rx="1" stroke={color} strokeWidth="2" fill="none" />
      <line x1="14" y1="12" x2="26" y2="12" stroke={color} strokeWidth="1.5" />
      <line x1="14" y1="18" x2="26" y2="18" stroke={color} strokeWidth="1.5" />
      <line x1="14" y1="24" x2="26" y2="24" stroke={color} strokeWidth="1.5" />
      {/* Check mark */}
      <path d="M16 32L20 36L28 28" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GlobalNetworkIcon({
  size = 48,
  color = '#0B1F3A',
  className = '',
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
    >
      {/* Globe */}
      <circle cx="24" cy="24" r="14" stroke={color} strokeWidth="2" fill="none" />
      <ellipse cx="24" cy="24" rx="14" ry="6" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M10 24A14 14 0 0 0 38 24" stroke={color} strokeWidth="1.5" fill="none" />
      {/* Network nodes */}
      <circle cx="24" cy="12" r="2" fill={color} />
      <circle cx="32" cy="24" r="2" fill={color} />
      <circle cx="24" cy="36" r="2" fill={color} />
      <circle cx="16" cy="24" r="2" fill={color} />
      {/* Connection lines */}
      <line x1="24" y1="12" x2="24" y2="36" stroke={color} strokeWidth="1" opacity="0.4" />
      <line x1="16" y1="24" x2="32" y2="24" stroke={color} strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

/**
 * Icon library - Map service names to icons
 */
export const LogisticsIconLibrary = {
  CustomsClearing: CustomsClearingIcon,
  FreightForwarding: FreightForwardingIcon,
  Warehouse: WarehouseIcon,
  Tracking: TrackingIcon,
  Cargo: CargoIcon,
  BorderProcessing: BorderProcessingIcon,
  Shipment: ShipmentIcon,
  Compliance: ComplianceIcon,
  GlobalNetwork: GlobalNetworkIcon,
};

interface IconDisplayProps extends IconProps {
  icon: keyof typeof LogisticsIconLibrary;
}

export function LogisticsIcon({
  icon,
  size = 48,
  color = '#0B1F3A',
  className = '',
}: IconDisplayProps) {
  const IconComponent = LogisticsIconLibrary[icon];
  if (!IconComponent) return null;

  return <IconComponent size={size} color={color} className={className} />;
}
