import React from "react";
import { Link } from "react-router-dom";
import Like from "../assets/images/like.svg";
import Profile from "../assets/images/profile.svg";

import {
  ModalContext,
  ModalHeader,
  ModalBox,
  ModalClose,
  ModalContainer,
  ModalInput,
  ModalText,
  BoxIcons,
  Icons,
  Count,
  Photo,
  Button,
  TextButton,
} from "../assets/styles/components/modal";

export default function Modal() {
  return (
    <ModalContext>
      <ModalContainer>
        <ModalHeader>
          <ModalBox>
            <Photo src={Profile} alt="Foto do usuário" />
            <BoxIcons>
              <Icons src={Like} alt="Icone Like" />
              <Count>12</Count>
            </BoxIcons>
          </ModalBox>
          <ModalClose>&times;</ModalClose>
        </ModalHeader>
        <ModalInput type="text" placeholder="Nome" />
        <ModalInput type="email" placeholder="E-mail" />
        <ModalInput
          type="text"
          placeholder="Foto (link foto do perfil do github)"
        />
        <ModalInput type="text" placeholder="Título" />
        <ModalText
          rows="1"
          placeholder="Descrição (até 280 caracteres)"
        ></ModalText>
        <ModalInput type="text" placeholder="Link Github" />
        <ModalInput type="text" placeholder="Link Linkedin" />
        <ModalInput type="text" placeholder="Número WhatsApp ( DDD Número" />

        <Button>
          <Link to="/login">
            <TextButton>Salvar</TextButton>
          </Link>
        </Button>
      </ModalContainer>
    </ModalContext>
  );
}
