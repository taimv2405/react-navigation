import { Tabs } from "expo-router";

import { TabIcon } from "@/components/tab-icon";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: (props) => <TabIcon name="home" {...props} />,
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          title: "Categories",
          tabBarIcon: (props) => <TabIcon name="th-large" {...props} />,
        }}
      />
      <Tabs.Screen
        name="favourites"
        options={{
          title: "Favourites",
          tabBarIcon: (props) => <TabIcon name="heart" {...props} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: (props) => <TabIcon name="user" {...props} />,
        }}
      />
    </Tabs>
  );
}
