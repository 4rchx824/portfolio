import React from "react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";

import { Instagram, Github, LinkedinIcon, LucideLinkedin } from "lucide-react";
import IconContainer from "./icon-container";
import { CardBody, CardItem } from "./ui/3d-card";

export default function ConnectCard() {
  return (
    <CardBody className="border border-white/[0.2] flex flex-col items-center w-full max-w-sm mx-auto p-4 relative h-[30rem]">
      <CardItem className="absolute -top-3 -left-3" translateZ={30}>
        <Icon className="h-6 w-6 text-white" />
      </CardItem>

      <CardItem className="absolute -top-3 -right-3" translateZ={30}>
        <Icon className="h-6 w-6 text-white" />
      </CardItem>

      <CardItem className="absolute -bottom-3 -left-3" translateZ={30}>
        <Icon className="h-6 w-6  text-white" />
      </CardItem>

      <CardItem className="absolute -bottom-3 -right-3" translateZ={30}>
        <Icon className="h-6 w-6 text-white" />
      </CardItem>

      <EvervaultCard text="Contact" />

      <CardItem
        className="flex items-center justify-center space-x-4 pt-8 pb-4"
        translateZ={30}
      >
        <IconContainer href="https://github.com/4rchx824">
          <Github size={36} fill="currentColor" color="currentColor" />
        </IconContainer>

        <IconContainer href="https://www.instagram.com/4rchx248/">
          <Instagram size={36} color="currentColor" className="h-full w-full" />
        </IconContainer>

        <IconContainer href="https://www.linkedin.com/in/yan-hein-latt/">
          <LucideLinkedin size={36} fill="currentColor" color="none" />
        </IconContainer>
      </CardItem>
    </CardBody>
  );
}
