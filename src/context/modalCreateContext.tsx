import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

export type TModalCreateContext = {
  showModal: () => void;
  hideModal: () => void;
  toShowModal: boolean;
  toggleModal: () => void;
};

interface IProps {
  children: ReactNode;
}

export const ModalCreateContext = createContext<TModalCreateContext | null>(
  null
);

export const ModalCreateContextProvider = ({ children }: IProps) => {
  const [toShowModal, setToShowModal] = useState<boolean>(false);

  const showModal = () => {
    setToShowModal(true);
  };

  const hideModal = () => {
    setToShowModal(false);
  };

  const toggleModal = () => {
    setToShowModal((prev) => !prev);
  };

  const contextValues = useMemo(
    () => ({ toShowModal, showModal, hideModal, toggleModal }),
    [toShowModal]
  );

  // hide modal on location change
  const location = useLocation();
  useEffect(() => {
    setToShowModal(false);
  }, [location]);

  return (
    <ModalCreateContext.Provider value={contextValues}>
      {children}
    </ModalCreateContext.Provider>
  );
};
