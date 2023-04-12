import { useContext } from "react";
import {
  ModalCreateContext,
  TModalCreateContext,
} from "../context/modalCreateContext";
import { NavContext, TNavContext } from "../context/navContext";

export const useModals = () => {
  const {
    toggleModal: toggleNav,
    hideModal: hideNav,
    showModal: showNav,
    toShowModal: toShowNav,
  } = useContext(NavContext) as TNavContext;

  const {
    hideModal: hideModalCreate,
    showModal: showModalCreate,
    toShowModal: toShowModalCreate,
    toggleModal: toggleModalCreate,
  } = useContext(ModalCreateContext) as TModalCreateContext;

  return {
    toggleNav,
    hideNav,
    showNav,
    toShowNav,
    hideModalCreate,
    showModalCreate,
    toShowModalCreate,
    toggleModalCreate,
  };
};
