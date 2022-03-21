import React, {
    useRef,
    useState,
} from 'react';
import { 
    ScrollView, 
    TouchableWithoutFeedback, 
    View, 
    Keyboard, 
} from 'react-native';
import moment from 'moment';
import DatePicker from 'react-native-date-picker';

import { CalendarIcon } from '../../../assets';
import { 
    BasicView, 
    Button, 
    Dropdown, 
    globalStyles, 
    Header, 
    Input, 
} from '../../components';
import { WHITE } from '../../contants/colors';
import { 
    CUSTOMERS, 
    PRODUCTS, 
} from '../../mocks';
import styles from '../authorization/authorizationStyle';

const AddInvoiceScreen = ({
    navigation: {
        navigate,
    },
}) => {
    const currentDate = new Date();

    const futureDate = new Date();
    futureDate.setMonth(futureDate.getMonth() + 2);
    
    const [date, setDate] = useState(currentDate);
    const [deadline, setDeadline] = useState(futureDate);

    const [isOpenDateModal, setIsOpenDateModal] = useState(false);
    const [isOpenDeadlineModal, setIsOpenDeadlineModal] = useState(false);

    let customerRef = useRef(null);
    let productRef = useRef(null);

    const handleKeyboardDismiss = () => {
        Keyboard.dismiss();
        customerRef.current.isOpen && customerRef.current.closeDropdown();
        productRef.current.isOpen && productRef.current.closeDropdown();
    }

    return (
        <BasicView 
            containerStyle={[globalStyles.alignCenter, {flex: 1}]}
            headerComponent={<Header title="Add invoice" />}
        >
            <ScrollView 
                style={[
                    globalStyles.flatListContainer,
                    globalStyles.addEntityScrollViewContainer,
                ]} 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[globalStyles.alignCenter]}
            >
                <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
                    <View>
                        <Input 
                            leftTitle="Number"
                            placeholder="Enter number"
                            withWarning
                            errorText="Error text"
                            containerStyle={globalStyles.regularBottomSpace}
                        />
                        <Input 
                            leftTitle="Date"
                            placeholder={moment(date).format("DD.MM.YYYY")}
                            withWarning
                            errorText="Error text"
                            containerStyle={globalStyles.regularBottomSpace}
                            leftIcon={<CalendarIcon />}
                            onCalendarPress={() => {
                                setIsOpenDateModal(!isOpenDateModal);
                            }}
                            isCalendar
                        />
                        <DatePicker 
                            modal
                            open={isOpenDateModal}
                            mode="date"
                            date={date}
                            title="Select date"
                            onConfirm={(value) => {
                                setIsOpenDateModal(false);                   
                                setDate(value);
                            }}
                            onCancel={() => setIsOpenDateModal(false)}
                        />
                        <Input 
                            leftTitle="Deadline"
                            placeholder={moment(deadline).format("DD.MM.YYYY")}
                            containerStyle={globalStyles.regularBottomSpace}
                            leftIcon={<CalendarIcon />}
                            onCalendarPress={() => {
                                setIsOpenDeadlineModal(!isOpenDeadlineModal);
                            }}
                            isCalendar
                        />
                        <DatePicker 
                            modal
                            open={isOpenDeadlineModal}
                            mode="date"
                            date={deadline}
                            title="Select deadline"
                            onConfirm={(value) => {
                                setIsOpenDeadlineModal(false);                   
                                setDeadline(value);
                            }}
                            onCancel={() => setIsOpenDeadlineModal(false)}
                        />
                        <Dropdown 
                            leftTitle="Customer"
                            placeholder="Choose customer"
                            containerStyle={globalStyles.regularBottomSpace}
                            data={CUSTOMERS}
                            ref={customerRef}
                        />
                        <Dropdown 
                            leftTitle="Product"
                            rightTitle="Optional"
                            placeholder="Choose product"
                            containerStyle={globalStyles.regularBottomSpace}
                            data={PRODUCTS}
                            ref={productRef}
                        />
                        <Input 
                            leftTitle="Comment"
                            containerStyle={styles.lastInputSpace}
                            rightTitle="Optional"
                        />
                        <Button 
                            color={WHITE}
                            text="Save"
                            customStyle={globalStyles.largeBottomPadding}
                        />
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </BasicView>
    );
}

export default AddInvoiceScreen;