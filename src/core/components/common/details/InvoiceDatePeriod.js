import React from 'react';
import moment from 'moment';

import { ResponsiveText } from '../..';
import globalStyles from '../../../styles/globalStyles';
import { MAIN_GRAY } from '../../../constants/colors';
import { languages } from '../../../internationalization/languages';

const InvoiceDatePeriod = ({
    date,
    deadline,
}) => {
    return (
        <React.Fragment>
            <ResponsiveText 
                fontStyle="labelDetails"
                color={MAIN_GRAY}
                text={languages.labels.date + ":"} 
                customStyle={globalStyles.smallLabelSpace}
            />
            <ResponsiveText 
                fontStyle="rightInputTitle"
                color={MAIN_GRAY}
                text={moment(new Date(date)).format("DD.MM.YYYY")}
                customStyle={globalStyles.regularBottomSpace}
            />
            <ResponsiveText 
                fontStyle="labelDetails"
                color={MAIN_GRAY}
                text={languages.labels.deadline + ":"} 
                customStyle={globalStyles.smallLabelSpace}
            />
            <ResponsiveText 
                fontStyle="rightInputTitle"
                color={MAIN_GRAY}
                text={moment(new Date(deadline)).format("DD.MM.YYYY")}
            />
        </React.Fragment>
    );
}

export default InvoiceDatePeriod;