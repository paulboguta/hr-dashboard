import { useEffect, useState } from "react";
import {
  GridColDef,
  GridRenderCellParams,
  GridSelectionModel,
} from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IJob } from "../../types/job.types";
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
import { RootState } from "../../store/store";
import { requestSearchJobs, selectRows } from "../../utils/table/tableUtils";
import {
  deleteJobAction,
  getCurrentJobActiom,
} from "../../store/actions/jobsActions";
import { deleteJob, deleteJobs } from "../../features/jobs/jobs.service";
import { CreateJobModal } from "../../components/Modals/Job/CreateJobModal";
import { ActionButtons } from "../../components/Tables/ActionButtons/ActionButtons";
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
  const [data, setData] = useState<IJob[]>([]);
  const [searchedData, setSearchedData] = useState<IJob[]>([]);
  const [pageSize, setPageSize] = useState<number>(5);
  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [selectedRows, setSelectedRows] = useState<IJob[]>([]);
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const windowDimenions = useWindowDimensions();

  const { jobs } = useSelector(
    (state: RootState) => state.rootReducer.jobsReducer
  );

  const onClickOpen = (cell: GridRenderCellParams) => {
    dispatch(getCurrentJob(cell.row));
    navigate(`/jobs/${cell.row.id}`);
  };

  const onClickDeleteOneJob = async (cell: GridRenderCellParams) => {
    await deleteJob(cell.row.id);
    dispatch(deleteJobAction());
  };

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    setSearchedData(requestSearchJobs(event.target.value, data));
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
      field: "title",
      headerName: "First name",
      minWidth: 200,
    },
    {
      field: "date",
      headerName: "Date",
      minWidth: 100,
    },
    {
      field: "",
      headerName: "Action",
      sortable: false,
      renderCell: (cell) => (
        <ActionButtons
          onClickOpen={() => onClickOpen(cell)}
          onClickDelete={() => onClickDeleteOneJob(cell)}
        />
      ),
      minWidth: 80,
    },
  ];

  const columnsMobile: GridColDef[] = [
    {
      field: "title",
      headerName: "First name",
      minWidth: 140,
    },
    {
      field: "",
      headerName: "Action",
      sortable: false,
      renderCell: (cell) => (
        <ActionButtons
          onClickOpen={() => onClickOpen(cell)}
          onClickDelete={() => onClickDeleteOneJob(cell)}
        />
      ),
      minWidth: 40,
    },
  ];

  // get data from store when deleting/adding job
  useEffect(() => {
    setData(Object.values(jobs));
  }, [jobs]);

  useEffect(() => {
    const tempArr: IJob[] = [];
    selectRows({ tempArr, data, selectionModel });
    setSelectedRows(tempArr);
  }, [data, selectionModel]);

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
            autoHeight
          />
        </WrapperTable>
      </WrapperMain>
    </Wrapper>
  );
};
