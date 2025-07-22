import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";

const RouteGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const isAuthenticated = false; // Replace with actual authentication logic
  useEffect(() => {
    if (isAuthenticated) {
      // Redirect to login or show an error
      // console.warn("User is not authenticated, redirecting to login.");
      router.replace("/auth");
    }
  }, [isAuthenticated, router]);
  // Here you can implement any route guard logic if needed
  return <>{children}</>;
};

const RootLayout = () => {
  return (
    <RouteGuard>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </RouteGuard>
  );
};

export default RootLayout;
