import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { ListGroup } from 'react-bootstrap'; 
import { Context } from '../index';

const TypeBar = observer(() => {
    const { device } = useContext(Context);

    if (!device || !device.types) {
        // Если device или device.types не определен
        return <div>Loading...</div>;
    }

    return (
        <ListGroup>
            {device.types.map(type => 
                <ListGroup.Item 
                    style={{ cursor: 'pointer' }}
                    active={type.id === device.selectedType?.id}
                    onClick={() => device.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>    
            )}
        </ListGroup>
    );
});

export default TypeBar;
