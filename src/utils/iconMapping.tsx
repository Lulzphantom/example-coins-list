import { TbWorldWww } from "react-icons/tb";
import { AiFillWechat } from "react-icons/ai";
import {
  FaRegNewspaper,
  FaTwitter,
  FaReddit,
  FaTelegram,
  FaDiscord,
  FaMedium,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaLinkedin,
  FaTwitch,
  FaSpotify,
  FaSoundcloud
} from "react-icons/fa";

export const iconMapping = {
  "website": <TbWorldWww />,
  "whitepaper": <FaRegNewspaper />,
  "twitter": <FaTwitter />,
  "reddit": <FaReddit />,
  "telegram": <FaTelegram />,
  "discord": <FaDiscord />,
  "medium": <FaMedium />,
  "instagram": <FaInstagram />,
  "tiktok": <FaTiktok />,
  "youtube": <FaYoutube />,
  "linkedin": <FaLinkedin />,
  "twitch": <FaTwitch />,
  "spotify": <FaSpotify />,
  "naver": <TbWorldWww />,
  "wechat": <AiFillWechat />,
  "soundcloud": <FaSoundcloud />
}

export type LinkIcon = keyof typeof iconMapping; 