import React from 'react';

import moment from 'moment';
import DatePicker from 'react-native-date-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { CalendarIcon } from '../../../../assets';
import { 
    BasicView, 
    Button, 
    Dropdown, 
    Header, 
    Input,
    TouchableLayout, 
} from '../../../core/components';
import { WHITE } from '../../../core/constants/colors';
import globalStyles from '../../../core/styles/globalStyles';
import { strings } from '../../../core/internationalization/strings';
import { useAddInvoiceScreen } from '../services';
import { hp } from '../../../core/tools';

const AddInvoiceScreen = ({
    route: {
        params,
    },
}) => {
    const {
        number, 
        setNumber,
        deadline, 
        customerId, 
        setCustomerId,
        comment, 
        setComment,
        chosenProducts, 
        setChosenProducts,
        errors, 
        isOpenDeadlineModal, 
        invoiceDetails,
        products,
        customers,
        customerRef,
        productRef,
        closeDropdowns,
        confirmDeadlineModal,
        toggleDeadlineModal,
        closeDeadlineModal,
        createInvoice,
    } = useAddInvoiceScreen(params)
    
    return (
        <BasicView 
            containerStyle={[
                globalStyles.alignCenter, 
                globalStyles.flex,
            ]}
            headerComponent={<Header title={strings.addEntity.addInvoice} />}
        >
            <KeyboardAwareScrollView 
                extraHeight={hp(150)}
                style={[
                    globalStyles.flatListContainer,
                    globalStyles.addEntityScrollViewContainer,
                ]} 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={globalStyles.alignCenter}
            >
                <TouchableLayout callback={closeDropdowns}>
                    <Input 
                        leftTitle={strings.labels.number}
                        placeholder={strings.placeholders.number}
                        errorText={errors[0]}
                        withWarning={errors[0] !== null}
                        containerStyle={globalStyles.regularBottomSpace}
                        value={number}
                        setValue={setNumber}
                        mask={numberMask}
                    />
                    <Input 
                        leftTitle={strings.labels.deadline}
                        placeholder={moment(deadline).format('DD.MM.YYYY')}
                        containerStyle={globalStyles.regularBottomSpace}
                        leftIcon={<CalendarIcon />}
                        errorText={errors[1]}
                        withWarning={errors[1] !== null}
                        onCalendarPress={toggleDeadlineModal}
                        isCalendar
                    />
                    <DatePicker 
                        modal
                        open={isOpenDeadlineModal}
                        mode='date'
                        date={deadline}
                        title={strings.calendar.selectDeadline}
                        onConfirm={confirmDeadlineModal}
                        onCancel={closeDeadlineModal}
                    />
                    <Dropdown 
                        leftTitle={strings.labels.customer}
                        placeholder={strings.placeholders.customer}
                        containerStyle={globalStyles.regularBottomSpace}
                        data={customers}
                        errorText={errors[2]}       
                        ref={customerRef}
                        setId={setCustomerId}  
                        id={customerId}  
                        chosenEntityName={invoiceDetails?.customer?.fullName} 
                    />
                    <Dropdown 
                        leftTitle={strings.labels.products}
                        placeholder={strings.placeholders.product}
                        containerStyle={globalStyles.regularBottomSpace}
                        data={products}
                        ref={productRef}
                        errorText={errors[3]}
                        chosenEntityName={invoiceDetails?.product?.name}            
                        multiple
                        setChosenEntities={setChosenProducts}
                        chosenEntities={chosenProducts}
                    />
                    <Input 
                        leftTitle={strings.labels.comment}
                        containerStyle={globalStyles.lastInputSpace}
                        rightTitle={strings.labels.optional}
                        value={comment}
                        setValue={setComment}
                    />
                    <Button 
                        color={WHITE}
                        text={strings.buttons.save}
                        customStyle={globalStyles.largeBottomPadding}
                        onPress={createInvoice}
                    />
                </TouchableLayout>
            </KeyboardAwareScrollView>
        </BasicView>
    );
}

export default AddInvoiceScreen;