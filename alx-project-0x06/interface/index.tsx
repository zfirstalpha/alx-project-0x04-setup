// ButtonProps interface (from components/common/Button.tsx)
export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green';
  action?: () => void;
}

// LayoutProps interface (from components/layouts/Layout.tsx)
export interface LayoutProps {
  children: React.ReactNode;
}

// PageRouteProps interface (from pages/index.tsx)
export interface PageRouteProps {
  pageRoute: string;
}
