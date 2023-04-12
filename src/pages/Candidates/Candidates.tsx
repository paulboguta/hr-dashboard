import { useEffect, useState } from "react";
import {
  GridColDef,
  GridRenderCellParams,
  GridSelectionModel,
} from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";
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
import {
  requestSearchCandidates,
  selectRows,
} from "../../utils/table/tableUtils";
import { deleteJobAction } from "../../store/actions/jobsActions";
import { deleteJobs } from "../../features/jobs/jobs.service";
import { IModalNavProps } from "../../types/modal.types";
import { deleteCandidateAction } from "../../store/actions/candidatesActions";
import { deleteCandidate } from "../../features/candidates/candidates.service";
import { getCurrentCandidate } from "../../store/actions/currentCandidateActions";
import { useWindowDimensions } from "../../hooks/hooks";
import { ICandidate } from "../../types/candidate.types";
import { CreateCandidateModal } from "../../components/Modals/Candidate/CreateCandidateModal";
import { ActionButtons } from "../../components/Tables/ActionButtons/ActionButtons";
import { Header } from "../../components/Header/Header";
import { Slider } from "../../components/Slider/Slider";
import { Wrapper, WrapperMain } from "./Cadidates.styles";

type ICandidatesProps = Pick<
  IModalNavProps,
  | "isShowingCreate"
  | "modalCreateOff"
  | "modalCreateToggle"
  | "navigationToggle"
  | "navigationOff"
  | "isShowingNavigation"
>;

export const Candidates = ({
  isShowingCreate,
  modalCreateOff,
  modalCreateToggle,
  navigationToggle,
  navigationOff,
  isShowingNavigation,
}: ICandidatesProps) => {
  const [data, setData] = useState<ICandidate[]>([]);
  const [searchedData, setSearchedData] = useState<ICandidate[]>([]);
  const [pageSize, setPageSize] = useState<number>(5);
  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [selectedRows, setSelectedRows] = useState<ICandidate[]>([]);
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const windowDimenions = useWindowDimensions();

  const { candidates } = useSelector(
    (state: RootState) => state.rootReducer.candidatesReducer
  );

  const onClickOpen = (cell: GridRenderCellParams) => {
    dispatch(getCurrentCandidate(cell.row));
    navigate(`/candidates/${cell.row.id}`);
  };

  const onClickDeleteOneCandidate = async (cell: GridRenderCellParams) => {
    await deleteCandidate(cell.row.id);
    dispatch(deleteCandidateAction());
  };

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    setSearchedData(requestSearchCandidates(event.target.value, data));
  };

  const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setSelectedValue(event.target.value);
  };

  const onClickDelete = () => {
    deleteJobs(selectedRows);
    dispatch(deleteJobAction());
    setSelectedValue("Actions");
  };

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      minWidth: 150,
    },
    {
      field: "email",
      headerName: "Email",
      minWidth: 150,
    },
    {
      field: "position",
      headerName: "Position",
      minWidth: 150,
    },
    {
      field: "",
      headerName: "Action",
      sortable: false,
      renderCell: (cell) => (
        <ActionButtons
          onClickOpen={() => onClickOpen(cell)}
          onClickDelete={() => onClickDeleteOneCandidate(cell)}
        />
      ),
      minWidth: 80,
    },
  ];

  const columnsMobile: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      minWidth: 90,
    },
    {
      field: "position",
      headerName: "Position",
      minWidth: 90,
    },
    {
      field: "",
      headerName: "Action",
      sortable: false,
      renderCell: (cell) => (
        <ActionButtons
          onClickOpen={() => onClickOpen(cell)}
          onClickDelete={() => onClickDeleteOneCandidate(cell)}
        />
      ),
      minWidth: 30,
    },
  ];

  // get data from store when deleting/adding job
  useEffect(() => {
    setData(Object.values(candidates));
  }, [candidates]);

  useEffect(() => {
    const tempArr: ICandidate[] = [];
    selectRows({ tempArr, data, selectionModel });
    setSelectedRows(tempArr);
  }, [data, selectionModel]);

  return (
    <Wrapper>
      {isShowingCreate ? (
        <CreateCandidateModal modalCreateToggle={modalCreateToggle} />
      ) : null}
      <Header navigationToggle={navigationToggle} />
      <WrapperMain>
        <Slider
          modalCreateOff={modalCreateOff}
          isShowingNavigation={isShowingNavigation}
          navigationOff={navigationOff}
        />
        <AddJobCandidateButtonMobile onClick={modalCreateToggle}>
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
            autoHeight
          />
        </WrapperTable>
      </WrapperMain>
    </Wrapper>
  );
};
