import { useJobsTable } from "../../hooks/jobs/useJobsTable";
import { useJobsColumns } from "../../hooks/jobs/useJobsColumns";
import { IModalNavProps } from "../../types/modal.types";
import {
  DeleteButton,
  Search,
  Select,
  StyledDataGrid,
  WrapperTable,
  WrapperActionsSearch,
  AddJobCandidateButton,
  AddJobCandidateButtonMobile,
} from "../../components/Tables/Table.styles";
import { CreateJobModal } from "../../components/Modals/Job/CreateJobModal";
import { useWindowDimensions } from "../../hooks/hooks";
import { Header } from "../../components/Header/Header";
import { Slider } from "../../components/Slider/Slider";
import { Wrapper, WrapperMain } from "./Jobs.styles";

type IJobsProps = Pick<
  IModalNavProps,
  | "isShowingCreate"
  | "modalCreateOff"
  | "modalCreateToggle"
  | "navigationToggle"
  | "navigationOff"
  | "isShowingNavigation"
>;
export const Jobs = ({
  isShowingCreate,
  modalCreateOff,
  modalCreateToggle,
  navigationToggle,
  navigationOff,
  isShowingNavigation,
}: IJobsProps) => {
  const {
    selectionModel,
    onChangeSelect,
    selectedValue,
    onClickDelete,
    searchText,
    onChangeSearch,
    searchedData,
    pageSize,
    data,
    setPageSize,
    setSelectionModel,
  } = useJobsTable();

  const { columns, columnsMobile } = useJobsColumns();

  const windowDimenions = useWindowDimensions();

  return (
    <Wrapper>
      {isShowingCreate ? (
        <CreateJobModal modalCreateToggle={modalCreateToggle} />
      ) : null}
      <Header navigationToggle={navigationToggle} />
      <WrapperMain>
        <Slider
          modalCreateOff={modalCreateOff}
          isShowingNavigation={isShowingNavigation}
          navigationOff={navigationOff}
        />
        <AddJobCandidateButtonMobile onClick={modalCreateToggle}>
          Add Job Offer
        </AddJobCandidateButtonMobile>
        <WrapperTable>
          <WrapperActionsSearch>
            <Select
              disabled={selectionModel.length < 1}
              onChange={onChangeSelect}
            >
              <option value="Actions">Actions</option>
              <option value="Delete">Delete</option>
            </Select>
            {selectedValue === "Delete" ? (
              <DeleteButton onClick={onClickDelete}>
                Confirm Delete
              </DeleteButton>
            ) : null}
            <Search
              placeholder="Search Job"
              value={searchText}
              onChange={onChangeSearch}
            />

            <AddJobCandidateButton onClick={modalCreateToggle}>
              Add Job Offer
            </AddJobCandidateButton>
          </WrapperActionsSearch>
          <StyledDataGrid
            rows={searchText.length >= 1 ? searchedData : data}
            columns={windowDimenions.width > 768 ? columns : columnsMobile}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[5, 10, 15, 20]}
            pagination
            checkboxSelection
            disableSelectionOnClick
            onSelectionModelChange={(newSelectionModel) => {
              setSelectionModel(newSelectionModel);
            }}
            selectionModel={selectionModel}
            disableColumnMenu
          />
        </WrapperTable>
      </WrapperMain>
    </Wrapper>
  );
};
