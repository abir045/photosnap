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
};
