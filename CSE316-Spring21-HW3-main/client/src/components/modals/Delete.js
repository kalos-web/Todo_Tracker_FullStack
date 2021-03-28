import React from 'react';

import { WModal, WMHeader, WMMain, WButton } from 'wt-frontend';

const Delete = (props) => {

    const handleDelete = async () => {
        props.deleteList(props.activeid);
        props.setShowDelete(false);
    }

    return (
        // Replace div with WModal
        <WModal visible={true} className="delete-modal" cover={true} animation="slide-fade-top">
            <WMHeader className="modal-header" onClose={() => props.setShowDelete(false)}>
                Delete List?
			</WMHeader>

            <WMMain>
                <div>
                    <WButton className="modal-button cancel-button" onClick={() => props.setShowDelete(false)} wType="texted">
                        Cancel
                    </WButton>
                    <label className="col-spacer">&nbsp;</label>
                    <WButton className="modal-button" onClick={handleDelete} clickAnimation="ripple-light" hoverAnimation="darken" shape="rounded" color="danger">
                        Delete
                    </WButton>
                </div>
            </WMMain>
            
        </WModal>
    );
}

export default Delete;