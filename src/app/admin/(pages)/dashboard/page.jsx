'use client'
import React, { useEffect, useState } from 'react';
import baseApi from '@/app/utils/functions';
import { Button, Grid, Paper, Typography } from '@mui/material';
// import MydataTable from '@/components/admin/dataTable';
import VolumeModal from '@/components/admin/VolumeModal';
import { DataGrid } from '@mui/x-data-grid';
import { Delete, TramSharp } from '@mui/icons-material';
import Swal from 'sweetalert2';
import IssueModal from '@/components/admin/issueModal';

const Dashboard = () => {
    const [rows, setrows] = useState([]);
    const [issuerows, setissuerows] = useState([]);
    const renderDetailsButton = (params) => {
        return (
            <strong>
                <Button
                    variant="contained"
                    color="error"
                    size="small"
                    style={{ marginLeft: 16 }}
                    onClick={() => {
                        console.log();
                        let vId = params.row.id;
                        Swal.fire({
                            title: "Are you sure?",
                            text: "All the issues related to this volume will be DELETED!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, delete it!"
                        }).then((result) => {
                            if (result.isConfirmed) {
                                baseApi.delete(`/volume?volume-id=${params.row.id}`).then((response) => {
                                    console.log(response);
                                    let newRows = rows.filter(row => row.id != vId);
                                    setrows(newRows);
                                    Swal.fire({
                                        title: "Deleted!",
                                        text: "Your file has been deleted.",
                                        icon: "success"
                                    });
                                })

                            }
                        });
                    }}
                >
                    <Delete />
                </Button>
            </strong>
        )
    }
    const renderDetailsButtonIssue = (params) => {
        return (
            <strong>
                <Button
                    variant="contained"
                    color="error"
                    size="small"
                    style={{ marginLeft: 16 }}
                    onClick={() => {
                        console.log();
                        let vId = params.row.id;
                        Swal.fire({
                            title: "Are you sure?",
                            text: "All the papers related to this volume will be DELETED!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, delete it!"
                        }).then((result) => {
                            if (result.isConfirmed) {
                                baseApi.delete(`/issue?issue-id=${params.row.id}`).then((response) => {
                                    console.log(response);
                                    let newRows = issuerows.filter(row => row.id != vId);
                                    setissuerows(newRows);
                                    Swal.fire({
                                        title: "Deleted!",
                                        text: "Your Issue has been deleted.",
                                        icon: "success"
                                    });
                                })

                            }
                        });
                    }}
                >
                    <Delete />
                </Button>
            </strong>
        )
    }
    const columns = [
        { field: 'Sno', headerName: 'Sno', flex: 1 },
        { field: 'id', headerName: 'ID', flex: 1 },
        { field: 'title', headerName: 'Volume Title', flex: 1 },
        {
            field: 'action', headerName: 'Action',

            renderCell: renderDetailsButton, flex: 1

        },


    ];
    const issue_columns = [
        { field: 'Sno', headerName: 'Sno', flex: 1 },
        { field: 'id', headerName: 'ID', flex: 1 },
        { field: 'issueTitle', headerName: 'Issue Title', flex: 1 },
        { field: 'title', headerName: 'Volume Title', flex: 1 },
        {
            field: 'action', headerName: 'Action',

            renderCell: renderDetailsButtonIssue
            , flex: 1
        },
        { field: 'date', headerName: 'date', flex: 1 },


    ];

    useEffect(() => {
        // const response = axios.get("http://localhost:3000/api/volume");
        // console.log(response);
        baseApi.get("/volume")
            .then((response) => {
                console.log(response.data.data);
                let mydata = response.data.data;
                setrows(mydata.reverse());
            })
            .catch((error) => {
                console.error("Error fetching volume data:", error);
            });
        baseApi.get('/issue').then((response) => {
            console.log(response.data.data);
            let issues = response.data.data;
            setissuerows(issues.reverse());
        })
    }, []);


    // const rows = myData;
    return (
        <>
            {/* {myData} */}
            {/* {
                myData.map((obj, index) => {
                    return (<p key={index}>{obj.title}</p>)
                })
            } */}

            <Grid container columnSpacing={2} rowSpacing={5}>
                <Grid item xs={6}>
                    <Paper sx={{ padding: '20px' }}>
                        <Typography variant='h5'>
                            Total Volumes : {rows.length}
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper sx={{ padding: '20px' }}>
                        <Typography variant='h5'>
                            Total Issues:{issuerows.length}
                        </Typography>
                    </Paper>
                </Grid>


                <Grid item xs={6}>
                    <VolumeModal setrows={setrows} rows={rows} />
                    <Paper>

                        <DataGrid
                            rows={rows}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: { page: 0, pageSize: 10 },
                                },
                            }}
                            pageSizeOptions={[20, 10]}
                            componentsProps={{
                                toolbar: {
                                    showQuickFilter: true,
                                    quickFilterProps: { debounceMs: 500 },
                                },
                            }}

                        />
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <IssueModal setrows={setissuerows} rows={issuerows} volumes={rows} />
                    <Paper>
                        <DataGrid
                            rows={issuerows}
                            columns={issue_columns}
                            initialState={{
                                pagination: {
                                    paginationModel: { page: 0, pageSize: 10 },
                                },
                            }}
                            pageSizeOptions={[20, 10]}
                            componentsProps={{
                                toolbar: {
                                    showQuickFilter: true,
                                    quickFilterProps: { debounceMs: 500 },
                                },
                            }}

                        />
                    </Paper>
                </Grid>
            </Grid>

        </>
    )
}

export default Dashboard