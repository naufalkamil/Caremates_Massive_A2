import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function Lembaga() {
  const tableStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    border: "1px solid #ddd"
  };

  const headerStyle = {
    backgroundColor: "#0098d9",
    color: "white"
  };

  const rowStyle = {
    backgroundColor: "rgba(0, 200, 255, 0.1)",
  };

  return (
    <main className='main-container'>
        <p style={{fontSize:"30px", width:"100", textAlign:"center"}}>DATA PUSAT BANTUAN</p>
      <Button className="mb-4" variant="info">Tambah +</Button>{' '}
      <Table striped bordered hover variant='dark' style={tableStyle}>
        <thead style={headerStyle}>
          <tr style={{justifyContent:'center', textAlign:'center'}}>
            <th>ID</th>
            <th>Pertanyaan</th>
            <th>Jawaban</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Apa Itu Caremates ?</td>
            <td>Caremates adalah sebuah platform donasi online dengan lembaga terpercaya</td>
            <td className="text-center"><Button className="me-1"  variant="primary">Edit</Button><Button className="me-1" variant="danger">Hapus</Button></td>
            
          </tr>
          <tr style={rowStyle}>
            <td>2</td>
            <td>Bagaimana Cara Mendaftarkan Akun</td>
            <td>Daftarkan akun di caremates sangat mudah melalui tombol daftarkan akun pada beranda</td>
            <td className="text-center"><Button className="me-1"  variant="primary">Edit</Button><Button className="me-1" variant="danger">Hapus</Button></td>
          </tr>
        </tbody>
      </Table>
    </main>
  );
}

export default Lembaga;
