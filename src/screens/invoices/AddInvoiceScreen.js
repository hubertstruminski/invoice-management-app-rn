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
import { languages } from '../../internationalization/languages';

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
            headerComponent={<Header title={languages.addEntity.addInvoice} />}
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
                        leftTitle={languages.labels.number}
                        placeholder={languages.placeholders.number}
                        errorText={languages.labels.errorText}
                        withWarning
                        containerStyle={globalStyles.regularBottomSpace}
                    />
                    <Input 
                        leftTitle={languages.labels.date}
                        placeholder={moment(date).format("DD.MM.YYYY")}
                        errorText={languages.labels.errorText}
                        withWarning
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
                        title={languages.calendar.selectDate}
                        onConfirm={confirmDateModal}
                        onCancel={closeDateModal}
                    />
                    <Input 
                        leftTitle={languages.labels.deadline}
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
                        title={languages.calendar.selectDeadline}
                        onConfirm={confirmDeadlineModal}
                        onCancel={closeDeadlineModal}
                    />
                    <Dropdown 
                        leftTitle={languages.labels.customer}
                        placeholder={languages.placeholders.customer}
                        containerStyle={globalStyles.regularBottomSpace}
                        data={CUSTOMERS}
                        ref={customerRef}
                    />
                    <Dropdown 
                        leftTitle={languages.labels.product}
                        rightTitle={languages.labels.optional}
                        placeholder={languages.placeholders.product}
                        containerStyle={globalStyles.regularBottomSpace}
                        data={PRODUCTS}
                        ref={productRef}
                    />
                    <Input 
                        leftTitle={languages.labels.comment}
                        containerStyle={styles.lastInputSpace}
                        rightTitle={languages.labels.optional}
                    />
                    <Button 
                        color={WHITE}
                        text={languages.buttons.save}
                        customStyle={globalStyles.largeBottomPadding}
                    />
                </TouchableLayout>
            </ScrollView>
        </BasicView>
    );
}

export default AddInvoiceScreen;