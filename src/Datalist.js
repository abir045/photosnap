import Pic1 from "./assets/features/desktop/responsive.svg";
import Pic2 from "./assets/features/desktop/no-limit.svg";
import Pic3 from "./assets/features/desktop/embed.svg";

export const homeContent = {
  banner: {
    heading: "Create and share your photo Stories",
    body: "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others",
    button: "Get an invite",
    img: require("./assets/home/desktop/create-and-share.jpg"),
    imgMobile: require("./assets/home/mobile/create-and-share.jpg"),
    imgTab: require("./assets/home/tablet/create-and-share.jpg"),
  },

  bannerStories: {
    heading: "Beautiful stories every time",
    body: "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
    button: "View the stories",
    img: require("./assets/home/desktop/beautiful-stories.jpg"),
    imgMobile: require("./assets/home/mobile/beautiful-stories.jpg"),
    imgTab: require("./assets/home/tablet/beautiful-stories.jpg"),
  },

  bannerDesign: {
    heading: "Designed for everyone",
    body: "Photosnap can help you create stories that resonate with your audience.Our tool is designed for photographers of all levels, brands, businesses you name it.",
    button: "View the stories",
    img: require("./assets/home/desktop/designed-for-everyone.jpg"),
    imgMobile: require("./assets/home/mobile/designed-for-everyone.jpg"),
    imgTab: require("./assets/home/tablet/designed-for-everyone.jpg"),
  },

  stories: [
    {
      title: "The Mountains",
      photographer: "by John Appleseed",
      button: "Read Story",
      img: require("./assets/stories/desktop/mountains.jpg"),
      imgMobile: require("./assets/stories/mobile/mountains.jpg"),
    },
    {
      title: "Sunset Cityscapes",
      photographer: "by Benjamin Cruz",
      button: "Read Story",
      img: require("./assets/stories/desktop/cityscapes.jpg"),
    },
    {
      title: "18 Days Voyage",
      photographer: "by Alexei Borodin",
      button: "Read Story",
      img: require("./assets/stories/desktop/18-days-voyage.jpg"),
    },
    {
      title: "Architecturals",
      photographer: "by Samantha Brooke",
      button: "Read Story",
      img: require("./assets/stories/desktop/architecturals.jpg"),
    },
  ],

  footerBanners: [
    {
      title: "100% Responsive",
      description:
        "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
      img: Pic1,
    },
    {
      title: "No Photo Upload Limit",
      description:
        "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
      img: Pic2,
    },
    {
      title: "Available to Embed",
      description:
        "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.",
      img: Pic3,
    },
  ],
};

export const StoriesContent = {
  banner: {
    heading: "Last month's featured story",
    headingTitle: "Hazy full moon of Appalachia",
    date: "March 2nd 2020",
    photographer: "by John Appleseed",
    body: "The dissected plateau area, while not actually made up of geological mountains, is popularly called mountains especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.",
    button: "read the story",
    img: require("./assets/stories/desktop/moon-of-appalacia.jpg"),

    imgMobile: require("./assets/stories/mobile/moon-of-appalacia.jpg"),
    imgTab: require("./assets/stories/tablet/moon-of-appalacia.jpg"),
  },

  photos: [
    [
      {
        date: "April 11th 2020",
        title: "18 Days Voyage",
        photographer: "by Alexei Borodin",
        img: require("./assets/stories/desktop/18-days-voyage.jpg"),
        imgMobile: require("./assets/stories/mobile/18-days-voyage.jpg"),
      },
      {
        date: "April 9th 2020",
        title: "Architecturals",
        photographer: "by Samantha Brooke",
        img: require("./assets/stories/desktop/architecturals.jpg"),
        button: "read story",
        imgMobile: require("./assets/stories/mobile/architecturals.jpg"),
      },
      {
        date: "March 11th 2020",
        title: "Behind the Waves",
        photographer: "by Lamarr Wilson",
        img: require("./assets/stories/desktop/behind-the-waves.jpg"),
        imgMobile: require("./assets/stories/mobile/behind-the-waves.jpg"),
        button: "read story",
      },

      {
        date: "March 9th 2020",
        title: "Calm Water",
        photographer: "by Samantha Brooke",
        img: require("./assets/stories/desktop/calm-waters.jpg"),
        imgMobile: require("./assets/stories/mobile/calm-waters.jpg"),
        button: "read story",
      },
    ],

    [
      {
        date: "April 14th 2020",
        title: "Sunset Cityscapes",
        photographer: "by Benjamin Cruz",
        button: "read story",
        img: require("./assets/stories/desktop/cityscapes.jpg"),
        imgMobile: require("./assets/stories/mobile/cityscapes.jpg"),
      },

      {
        date: "March 4th 2020",
        title: "Night at The Dark Forest",
        photographer: "by  Mohammed Abdul",
        img: require("./assets/stories/desktop/dark-forest.jpg"),
        imgMobile: require("./assets/stories/mobile/dark-forest.jpg"),
        button: "read story",
      },

      {
        date: "March 29th 2020",
        title: "King on Africa: Part II",
        photographer: "by Tim Hillenburg",
        img: require("./assets/stories/desktop/king-on-africa.jpg"),
        imgMobile: require("./assets/stories/mobile/king-on-africa.jpg"),
        button: "read story",
      },
      {
        date: "February 25th 2020",
        title: "Land of Dreams",
        photographer: "by William Malcolm",
        img: require("./assets/stories/desktop/land-of-dreams.jpg"),
        imgMobile: require("./assets/stories/mobile/land-of-dreams.jpg"),
        button: "read story",
      },
    ],

    [
      {
        date: "March 5th 2020",
        title: "Milky Way",
        photographer: "by Benjamin Cruz",
        img: require("./assets/stories/desktop/milky-way.jpg"),
        imgMobile: require("./assets/stories/mobile/milky-way.jpg"),
        button: "read story",
      },

      {
        img: require("./assets/stories/desktop/mountains.jpg"),
        date: "April 16th 2020",
        title: "The Mountains",
        photographer: "by John Appleseed",
        button: "read story",
        imgMobile: require("./assets/stories/mobile/mountains.jpg"),
      },

      {
        date: "March 19th 2020",
        title: "Rage of The Sea",
        photographer: "by Mohammed Abdul",
        img: require("./assets/stories/desktop/rage-of-the-sea.jpg"),
        imgMobile: require("./assets/stories/mobile/rage-of-the-sea.jpg"),
        button: "read story",
      },

      {
        date: "March 16th 2020",
        title: "Running Free",
        photographer: "by Michelle",
        img: require("./assets/stories/desktop/running-free.jpg"),
        imgMobile: require("./assets/stories/mobile/running-free.jpg"),
        button: "read story",
      },
    ],

    [
      {
        date: "March 1st 2020",
        title: "Somwarpet’s Beauty",
        photographer: "by Michelle",
        img: require("./assets/stories/desktop/somwarpet.jpg"),
        imgMobile: require("./assets/stories/mobile/somwarpet.jpg"),
        button: "read story",
      },
      {
        date: "March 21st 2020",
        title: "The Trip to Nowhere",
        photographer: "by Felicia Rourke",
        img: require("./assets/stories/desktop/trip-to-nowhere.jpg"),
        imgMobile: require("./assets/stories/mobile/trip-to-nowhere.jpg"),
        button: "read story",
      },

      {
        date: "April 3rd 2020",
        title: "Unforeseen Corners",
        photographer: "by William Malcolm",
        img: require("./assets/stories/desktop/unforeseen-corners.jpg"),
        imgMobile: require("./assets/stories/mobile/unforeseen-corners.jpg"),
        button: "read story",
      },

      {
        date: "April 7th 2020",
        title: "World Tour 2019",
        photographer: "by Timothy Wagner",
        img: require("./assets/stories/desktop/world-tour.jpg"),
        imgMobile: require("./assets/stories/mobile/world-tour.jpg"),
        button: "read story",
      },
    ],
  ],
};
