'use client';

import { SessionProvider } from "next-auth/react";

type ProviderProps = {
  children?: React.ReactNode;
  session?: any;
};

const Provider: React.FC<ProviderProps> = ({ children, session }) => (
  <SessionProvider session={session}>
    {children}
  </SessionProvider>
)

export default Provider;