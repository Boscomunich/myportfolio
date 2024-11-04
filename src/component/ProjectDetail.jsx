import React from 'react';
import { useParams } from 'react-router-dom';
import { works } from '../Constant';


const ProjectDetail = () => {

    const params = useParams()

    const project = works.find(work => work.title === params.title);

    return (
        <div className='min-h-screen mt-20'>
            {params.title}
        </div>
    );
};

export default ProjectDetail;