export interface IModalNavProps {
  isShowingCreate?: boolean;
  modalCreateToggle?(): void;
  modalCreateOff?(): void;
  isShowingNavigation?: boolean;
  navigationToggle?(): void;
  navigationOff?(): void;
}
