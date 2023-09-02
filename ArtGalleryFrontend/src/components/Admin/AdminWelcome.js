import AdminSideBar from "./AdminSideBar";

function AdminWelcome() {

    return (
        <div>

            <div style={{
                height: "100vh", backgroundColor: "grey", backgroundImage:
                    "url('https://images.unsplash.com/photo-1630002931917-964ccb95d0a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFydCUyMGdhbGxlcnl8ZW58MHx8MHx8fDA%3D&w=1000&q=80')", height: "100vh",
                    marginTop: "0px",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
            }}>

                <AdminSideBar />

            </div>



        </div>
    )
}

export default AdminWelcome;