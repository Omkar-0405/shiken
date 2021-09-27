import React from 'react'
import Layout from '../../components/layout/Navbar'
import RegularForm from '../../containers/form/RegularForm'

/**
* @author
* @function ExamForm
**/

const ExamForm = (props) => {

    return (
        <div>
            <Layout>
                <RegularForm student={{user:"from context"}} />
            </Layout>

        </div>
    )
}


export default ExamForm