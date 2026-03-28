// app/layout.tsx
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

// This layout is the very root and is required even with [locale]
export default function RootLayout({ children }: Props) {
  return children;
}