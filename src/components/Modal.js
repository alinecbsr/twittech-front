/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import React, {useState, useLayoutEffect} from "react";
import Like from "../assets/images/like.svg";
import { skillService } from "../services/api";

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

export default function Modal(props) {
  const [listSkill, setListSkill] = useState([]);
  const [skillsFounded, setSkillsFounded] = useState([]);
  const [name, setName] = useState(props.user.name);
  const [user, setUser] = useState(props.user.user);
  const [github, setGithub] = useState(props.user.github);
  const [skills, setSkills] = useState(props.user.skills);
  const [linkedin, setLinkedin] = useState(props.user.linkedin);
  const [whatsapp, setWhatsap] = useState(props.user.whatsapp);
  const [role, setRole] = useState(props.user.role||'');
  const [description, setDescription] = useState(props.user.description);

  const changeUser = () => {
    //Precisa por validação
    //let u = {...props.user, name, github,linkedin,whatsapp,role,description}
    let u = {_id:props.user._id, name, github,linkedin,whatsapp,role,description, skills}

    //Se tudo estiver ok, salva
    props.saveUser(u);
    //O MODAL SERÁ FECHADO PELO PAI

  }

  const getSkills = async () => {
    const skils = await skillService.listSkill();
    setListSkill(skils)
  }

  const searchSkill = (name) => {
    const n = name.toUpperCase();
    const s = listSkill.filter((skill) => {
      if(skill.name.indexOf(n) !== -1 ){
        return true
      }
    })
    setSkillsFounded(s);
  }

  const hasSkill = (skill) =>{
    const ls = skills.filter(s => skill.name === s.name )
    return ls.length ? true : false;
  }

  const addSkill = (skill) => {
    
    let mySkills = skills;
    //Caso ainda não possua a skill
    if(!hasSkill(skill)){
      mySkills.push(skill);
      setSkills(mySkills);
      console.log('skills', skills)
    }

  }

  const removeSkill = (skill) => {
    
    let mySkills = skills.filter(s => s._id !== skill._id);
    setSkills(mySkills);

  }

  // useEffect(()=>{
  //   getSkills()
  // },[])
  useLayoutEffect(()=>{
      getSkills()
    },[])
 
  return (
    <ModalContext show={props.show}>
      <ModalContainer>
        <ModalHeader>
          <ModalBox>
            <Photo src={github && `${github}.png`} alt="Foto do usuário" />
            <BoxIcons>
              <Icons src={Like} alt="Icone Like" />
              <Count>{props.user.likes ? props.user.likes.length : 0}</Count>
            </BoxIcons>
          </ModalBox>
          <ModalClose onClick={props.close}>&times;</ModalClose>
        </ModalHeader>
        <ModalInput type="text" value={name} onChange={(e)=>{ setName(e.target.value)}} placeholder="Nome" />
        <ModalInput type="email" value={user} disabled />
        <ModalInput type="text" value={role} onChange={(e)=>{ setRole(e.target.value)}} placeholder="Título"/>
        <span>Skills</span>
        <ModalInput type="text" placeholder="Skill" onChange={(e)=>searchSkill(e.target.value)} with="10px"  />
        <span>Resultado da busca de skills</span>
        <div>
          <ul>
            {skillsFounded && skillsFounded.map((s)=>(
              <li key={s._id}>{s.name} <button onClick={()=>{addSkill(s)}}>+</button></li>
            ))}
          </ul>
        </div>
        <span>Minha lista de skills</span>
        <ul>
            {skills.map((s)=>(
              <li key={`rem${s._id}`}>{s.name} <button onClick={() => {removeSkill(s)}}>-</button></li>
            ))}
          </ul>
        <ModalText
          rows="1"
          length="280"
          value={description}
          onChange={(e)=>{ setDescription(e.target.value)}}
          placeholder="Descrição (até 280 caracteres)"
        ></ModalText>
        <ModalInput type="text" placeholder="Link Github" onChange={(e)=>{ setGithub(e.target.value)}} value={github} />
        <ModalInput type="text" placeholder="Link Linkedin" onChange={(e)=>{ setLinkedin(e.target.value)}} value={linkedin} />
        <ModalInput type="text" placeholder="Número WhatsApp ( DDD Número )" onChange={(e)=>{ setWhatsap(e.target.value)}} value={whatsapp} />

        <Button onClick={changeUser}>
          <TextButton>Salvar</TextButton>
        </Button>
      </ModalContainer>
    </ModalContext>
  );
}
