import { Component } from "solid-js";

const Profile: Component = () => {
  // Placeholder data - replace with actual data fetching later
  const user = {
    name: "Solid User",
    avatarUrl: "https://freesvg.org/img/abstract-user-flat-4.png", // Placeholder image
    bio: "Loves building fast and reactive UIs with SolidJS.",
    followers: 123,
    following: 45,
    posts: 67,
  };

  return (
    <div class="p-4 max-w-md mx-auto">
      <div class="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <div class="flex items-center space-x-4 mb-6">
          <img
            class="h-16 w-16 rounded-full object-cover"
            src={user.avatarUrl}
            alt={`${user.name}'s avatar`}
          />
          <div>
            <h1 class="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {user.name}
            </h1>
            {/* Optional: Add username or handle here */}
          </div>
        </div>
        <p class="text-gray-700 dark:text-gray-300 mb-6">{user.bio}</p>
        <div class="flex justify-around text-center border-t border-gray-200 dark:border-gray-700 pt-4">
          <div>
            <p class="font-semibold text-gray-900 dark:text-gray-100">
              {user.followers}
            </p>
            <p class="text-sm text-gray-600 dark:text-gray-400">Followers</p>
          </div>
          <div>
            <p class="font-semibold text-gray-900 dark:text-gray-100">
              {user.following}
            </p>
            <p class="text-sm text-gray-600 dark:text-gray-400">Following</p>
          </div>
          <div>
            <p class="font-semibold text-gray-900 dark:text-gray-100">
              {user.posts}
            </p>
            <p class="text-sm text-gray-600 dark:text-gray-400">Posts</p>
          </div>
        </div>
      </div>

      {/* Example of adding a scrollable section within the page */}
      <div class="mt-8 bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 h-64 scrollable-content">
        <h2 class="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
          Activity Feed
        </h2>
        {/* Add scrollable content here */}
        <p class="text-gray-700 dark:text-gray-300">Activity item 1...</p>
        <p class="text-gray-700 dark:text-gray-300">Activity item 2...</p>
        <p class="text-gray-700 dark:text-gray-300">Activity item 3...</p>
        {/* Add many more items to make it scrollable */}
        <div class="h-[100vh]" /> {/* Force scroll */}
      </div>
    </div>
  );
};

export default Profile;
