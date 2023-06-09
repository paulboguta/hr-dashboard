import { useCandidatesTable } from "../../hooks/candidates/useCandidatesTable";
import { useCandidatesColumns } from "../../hooks/candidates/useCandidatesColumns";
import {
  AddJobCandidateButton,
  AddJobCandidateButtonMobile,
  DeleteButton,
  Search,
  Select,
  StyledDataGrid,
  WrapperActionsSearch,
  WrapperTable,
} from "../../components/Tables/Table.styles";
import { useWindowDimensions } from "../../hooks/hooks";
import { CreateCandidateModal } from "../../components/Modals/Candidate/CreateCandidateModal";
import { Header } from "../../components/Header/Header";
import { Slider } from "../../components/Slider/Slider";
import { Wrapper, WrapperMain } from "./Cadidates.styles";
import { useModals } from "../../hooks/useModals";

export const Candidates = () => {
  const {
    selectionModel,
    onChangeSelect,
    selectedValue,
    onClickDelete,
    searchText,
    onChangeSearch,
    searchedData,
    data,
    pageSize,
    setPageSize,
    setSelectionModel,
  } = useCandidatesTable();
  const {toShowModalCreate, toggleModalCreate } = useModals();
  const { columns, columnsMobile } = useCandidatesColumns();
  const windowDimenions = useWindowDimensions();

  return (
    <Wrapper>
      {toShowModalCreate ? (
        <CreateCandidateModal modalCreateToggle={toggleModalCreate} />
      ) : null}
      <Header />
      <WrapperMain>
        <Slider
        
        />
        <AddJobCandidateButtonMobile onClick={toggleModalCreate}>
          Add Candidate
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

            <AddJobCandidateButton onClick={toggleModalCreate}>
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
            autoHeight
          />
        </WrapperTable>
      </WrapperMain>
    </Wrapper>
  );
};
