import React, {
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { ScrollView } from 'react-native';
import moment from 'moment';
import DatePicker from 'react-native-date-picker';
import { connect } from 'react-redux';

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
import styles from '../screenStyle';
import { languages } from '../../internationalization/languages';
import { 
    handleFormErrors, 
    initFutureDate, 
    validateNewInvoiceForm, 
} from '../../tools';
import { 
    addInvoice, 
    updateInvoice, 
} from '../../redux/actions';

const AddInvoiceScreen = ({
    navigation: {
        goBack,
    },
    customers,
    products,
    invoiceDetails,
    route: {
        params,
    },
    addInvoice,
    updateInvoice,
}) => {
    const currentDate = new Date();
    const futureDate = initFutureDate();
    
    const [number, setNumber] = useState('');
    const [date, setDate] = useState(currentDate);
    const [deadline, setDeadline] = useState(futureDate);
    const [customerId, setCustomerId] = useState(null);
    const [productId, setProductId] = useState(null);
    const [comment, setComment] = useState('');

    const [errors, setErrors] = useState([null, null, null]);

    const [isOpenDateModal, setIsOpenDateModal] = useState(false);
    const [isOpenDeadlineModal, setIsOpenDeadlineModal] = useState(false);

    let customerRef = useRef(null);
    let productRef = useRef(null);

    useEffect(() => {
        setNumber(invoiceDetails?.number);
        setDate(new Date(invoiceDetails?.date));
        setDeadline(new Date(invoiceDetails?.deadline));
        setCustomerId(invoiceDetails?.customer?.id);
        setProductId(invoiceDetails?.product?.id);
        setComment(invoiceDetails?.description);
    }, []);

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

    const createInvoice = useCallback(() => {
        const errorObject = validateNewInvoiceForm(number, date, deadline, customerId);
        const isValidModel = handleFormErrors(errorObject, errors, setErrors);

        if(isValidModel) {
            let payload = {
                number,
                date,
                deadline,
                customer: customers.find(item => item.id === customerId),
                // product: null,
                description: comment,
            };

            if(params?.isEdit) {
                payload = { 
                    ...payload, 
                    id: invoiceDetails.id,
                    sentStatus: invoiceDetails.sentStatus,
                };
                updateInvoice(payload);
            } else {
                payload = { 
                    ...payload, 
                    id: (new Date()).getTime(),
                    sentStatus: false, 
                    product: products.find(item => item.id === productId),
                };
                addInvoice(payload);
            }
            goBack();
        }
    }, [
        number,
        date,
        customerId,
        productId,
        errors,
        products,
        customers,
    ]);

    const numberMask = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
    
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
                        errorText={errors[0]}
                        withWarning={errors[0] !== null}
                        containerStyle={globalStyles.regularBottomSpace}
                        value={number}
                        setValue={setNumber}
                        mask={numberMask}
                    />
                    <Input 
                        leftTitle={languages.labels.date}
                        placeholder={moment(date).format("DD.MM.YYYY")}
                        errorText={languages.labels.errorText}
                        errorText={errors[1]}
                        withWarning={errors[1] !== null}
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
                        data={customers}
                        errorText={errors[2]}       
                        ref={customerRef}
                        setId={setCustomerId}  
                        id={customerId}  
                        chosenEntityName={invoiceDetails?.customer?.fullName} 
                    />
                    <Dropdown 
                        leftTitle={languages.labels.product}
                        rightTitle={languages.labels.optional}
                        placeholder={languages.placeholders.product}
                        containerStyle={globalStyles.regularBottomSpace}
                        data={products}
                        ref={productRef}
                        setId={setProductId} 
                        chosenEntityName={invoiceDetails?.product?.name}            
                    />
                    <Input 
                        leftTitle={languages.labels.comment}
                        containerStyle={styles.lastInputSpace}
                        rightTitle={languages.labels.optional}
                        value={comment}
                        setValue={setComment}
                    />
                    <Button 
                        color={WHITE}
                        text={languages.buttons.save}
                        customStyle={globalStyles.largeBottomPadding}
                        onPress={createInvoice}
                    />
                </TouchableLayout>
            </ScrollView>
        </BasicView>
    );
}

const mapStateToProps = state => ({
    products: state.product.products,
    customers: state.customer.customers,
    invoiceDetails: state.invoice.invoiceDetails,
});

export default connect(mapStateToProps, { 
    addInvoice,
    updateInvoice,
})(AddInvoiceScreen);