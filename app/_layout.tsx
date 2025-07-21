import { Stack } from "expo-router";
import { useEffect } from "react";

function RouteGuard({ children }: { children: React.ReactNode }) {
  const isAuthenticated = false; // Replace with actual authentication logic
  useEffect(() => {
    if (!isAuthenticated) {
      // Redirect to login or show an error
      // console.warn("User is not authenticated, redirecting to login.");
      // router.replace("/auth");
    }
  }, [isAuthenticated]);
  // Here you can implement any route guard logic if needed
  return <>{children}</>;
}

export default function RootLayout() {
  return (
    <RouteGuard>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </RouteGuard>
  );
}
