import React, {useState} from 'react';
import ConfirmAction from './Confirm';

// change this into delete button ONLY

const PageList = ({pages, newPage, title, deletePage}) => { // destructuring props to grab its elements directly for use
    const [openModal, setOpenModal] = useState(false);
    const [pageToDelete, setPageToDelete] = useState(null);
    const [confirmDelete, setConfirmDelete] = useState(false);

    return (
        <section className="page-list">
            <h3>{title}</h3>
            <button onClick={newPage}>Make a new page</button>
            {pages.map((page) => (
                <section className="page-preview" key={page.id}>
                    <div className="page-right">
                        <h4>{page.title}</h4>
                        <p>Created {page.date}</p>
                    </div>
                    <div className="page-left">
                        <button className="delete-page" onClick={() => {
                            setOpenModal(true);
                            setPageToDelete(page);
                        }}>X</button>
                        {/* if modal is open, render confirm action modal */
                        openModal && <ConfirmAction action={`You are trying to delete "${pageToDelete.title}".`} setModal={setOpenModal} confirmAction={setConfirmDelete} />}
                    </div>
                </section>)
                )
            }
            {/* if confirm delete is true, delete page and switch to false */}
            {confirmDelete && (deletePage(pageToDelete.id), setConfirmDelete(false))}
        </section>
    );
}

export default PageList;