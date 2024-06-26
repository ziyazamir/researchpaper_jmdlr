'use client'
import React, { useEffect, useState } from 'react'
import baseApi from '@/app/utils/functions';
import { Button, Grid, Paper, Typography } from '@mui/material';
// import MydataTable from '@/components/admin/dataTable';
import VolumeModal from '@/components/admin/VolumeModal';
import { DataGrid } from '@mui/x-data-grid';
import { Delete, TramSharp } from '@mui/icons-material';
import Swal from 'sweetalert2';
import IssueModal from '@/components/admin/issueModal';
import Link from 'next/link';

const Rpaper = () => {
    const [rows, setrows] = useState([]);
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
                            text: "Are you sure. It is irreversible!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, delete it!"
                        }).then((result) => {
                            if (result.isConfirmed) {
                                baseApi.delete(`/paper?paper-id=${params.row.id}`).then((response) => {
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

    const columns = [
        { field: 'Sno', headerName: 'Sno', flex: 1 },
        { field: 'id', headerName: 'ID', flex: 1 },
        { field: 'paper_title', headerName: 'Paper Title', flex: 1 },
        { field: 'author', headerName: 'Auhtor', flex: 1 },
        { field: 'doi', headerName: 'DOI', flex: 1 },
        { field: 'volume_title', headerName: 'Volume', flex: 1 },
        { field: 'issue_title', headerName: 'Isuue', flex: 1 },
        { field: 'abstact', headerName: 'Abstract', flex: 1 },
        { field: 'createdAt', headerName: 'Created At', flex: 1 },
        {
            field: 'action', headerName: 'Action',

            renderCell: renderDetailsButton,
            flex: 1

        },


    ];


    useEffect(() => {
        // const response = axios.get("http://localhost:3000/api/volume");
        // console.log(response);
        baseApi.get("/paper")
            .then((response) => {
                console.log(response.data.data);
                let mydata = response.data.data;
                setrows(mydata.reverse());
            })
            .catch((error) => {
                console.error("Error fetching volume data:", error);
            });
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

                <Grid item xs={12}>
                    <Paper sx={{ padding: '20px', display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant='h5'>
                            All Paper
                        </Typography>
                        <Link href={'/admin/research-paper/add'} sx={{ marginLeft: 'auto' }}><Button variant='outlined'>Add</Button></Link>

                    </Paper>
                </Grid>

                <Grid item xs={12}>
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

            </Grid>

        </>
    )
}

export default Rpaper