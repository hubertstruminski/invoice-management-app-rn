import React, {
    useCallback,
    useRef,
    useState,
} from 'react';
import { ScrollView } from 'react-native';
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
    TouchableLayout, 
} from '../../components';
import { WHITE } from '../../contants/colors';
import { 
    CUSTOMERS, 
    PRODUCTS, 
} from '../../mocks';
import styles from '../screenStyle';

const AddInvoiceScreen = () => {
    const currentDate = new Date();

    const futureDate = new Date();
    futureDate.setMonth(futureDate.getMonth() + 2);
    
    const [date, setDate] = useState(currentDate);
    const [deadline, setDeadline] = useState(futureDate);

    const [isOpenDateModal, setIsOpenDateModal] = useState(false);
    const [isOpenDeadlineModal, setIsOpenDeadlineModal] = useState(false);

    let customerRef = useRef(null);
    let productRef = useRef(null);

    const closeDropdowns = useCallback(() => {
        customerRef.current.isOpen && customerRef.current.closeDropdown();
        productRef.current.isOpen && productRef.current.closeDropdown();
    }, [customerRef, productRef]);

    const confirmDateModal = useCallback((value) => {
        setIsOpenDateModal(false);                   
        setDate(value);
    }, []);

    const confirmDeadlineModal = useCallback((value) => {
        setIsOpenDeadlineModal(false);                   
        setDeadline(value);
    }, []);

    const toggleDateModal = 
    useCallback(() => setIsOpenDateModal(!isOpenDateModal), [isOpenDateModal]);
    const toggleDeadlineModal = 
    useCallback(() => setIsOpenDeadlineModal(!isOpenDeadlineModal), [isOpenDeadlineModal]);

    const closeDateModal = useCallback(() => setIsOpenDateModal(false), []);
    const closeDeadlineModal = useCallback(() => setIsOpenDeadlineModal(false), []);

    return (
        <BasicView 
            containerStyle={[
                globalStyles.alignCenter, 
                globalStyles.flex,
            ]}
            headerComponent={<Header title="Add invoice" />}
        >
            <ScrollView 
                style={[
                    globalStyles.flatListContainer,
                    globalStyles.addEntityScrollViewContainer,
                ]} 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={globalStyles.alignCenter}
            >
                <TouchableLayout callback={closeDropdowns}>
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
                        onCalendarPress={toggleDateModal}
                        isCalendar
                    />
                    <DatePicker 
                        modal
                        open={isOpenDateModal}
                        mode="date"
                        date={date}
                        title="Select date"
                        onConfirm={confirmDateModal}
                        onCancel={closeDateModal}
                    />
                    <Input 
                        leftTitle="Deadline"
                        placeholder={moment(deadline).format("DD.MM.YYYY")}
                        containerStyle={globalStyles.regularBottomSpace}
                        leftIcon={<CalendarIcon />}
                        onCalendarPress={toggleDeadlineModal}
                        isCalendar
                    />
                    <DatePicker 
                        modal
                        open={isOpenDeadlineModal}
                        mode="date"
                        date={deadline}
                        title="Select deadline"
                        onConfirm={confirmDeadlineModal}
                        onCancel={closeDeadlineModal}
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
                </TouchableLayout>
            </ScrollView>
        </BasicView>
    );
}

export default AddInvoiceScreen;