import { TwitterIcon, DiscordIcon } from "./Icons"
import InstagramColorizedIcon from "../assets/svg/instagram-colorized.svg"

export const SocialNetworksList = () => {
  const socialNetworks = [
    {
      name: "Twitter",
      url: "https://twitter.com/EasyFing",
      image: <TwitterIcon size={24} color="#1D9BF0" />,
      userName: "EasyFing",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/easyfing/",
      image: <img src={InstagramColorizedIcon} alt="instagram logo" />,
      userName: "EasyFing",
    },
    {
      name: "Discord",
      url: "https://discord.gg/G73Zp2gfhV",
      image: <DiscordIcon size={24} color="#5865F2" />,
      userName: "FING 2022",
    },
  ]

  return (
    <div className="social-networks-list">
      <h3>Siguenos en:</h3>
      <ul>
        {socialNetworks.map(({ name, url, image, userName }) => (
          <li key={name}>
            <a href={url}>
              {image}
              <span>{userName}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
