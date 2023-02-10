import React from 'react';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { 
    BasicView, 
    Button, 
    Dropdown, 
    Header, 
    Input,
    TouchableLayout, 
} from '../../../core/components';
import globalStyles from '../../../core/styles/globalStyles';
import { WHITE } from '../../../core/constants/colors';
import { strings } from '../../../core/internationalization/strings';
import { useAddProductScreen } from '../services';
import { hp } from '../../../core/tools';

const AddProductScreen = ({
    route: {
        params,
    },
}) => {
    const {
        taxes,
        productDetails,
        name, 
        setName,
        description, 
        setDescription,
        price, 
        setPrice,
        amount, 
        setAmount,
        discount, 
        setDiscount,
        unit, 
        setUnit,
        taxId, 
        setTaxId,
        errors, 
        taxRef,
        closeDropdown,
        createProduct,
    } = useAddProductScreen(params);

    return (
        <BasicView 
            containerStyle={[
                globalStyles.alignCenter, 
                globalStyles.flex,
            ]}
            headerComponent={<Header title={strings.addEntity.addProduct} />}
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
                <TouchableLayout callback={closeDropdown}>
                    <Input 
                        leftTitle={strings.labels.name}
                        placeholder={strings.placeholders.name}
                        withWarning={errors[0] !== null}
                        errorText={errors[0]}
                        containerStyle={globalStyles.regularBottomSpace}
                        value={name}
                        setValue={setName}
                    />
                    <Input 
                        leftTitle={strings.labels.description}
                        rightTitle={strings.labels.optional}
                        placeholder={strings.placeholders.description}
                        containerStyle={globalStyles.regularBottomSpace}
                        value={description}
                        setValue={setDescription}
                    />
                    <Input 
                        leftTitle={strings.labels.price}
                        placeholder={strings.placeholders.price}
                        withWarning={errors[1] !== null}
                        errorText={errors[1]}
                        containerStyle={globalStyles.regularBottomSpace}
                        value={price}
                        setValue={setPrice}
                    />
                    <Input 
                        leftTitle={strings.labels.amount}
                        placeholder={strings.placeholders.amount}
                        withWarning={errors[2] !== null}
                        errorText={errors[2]}
                        containerStyle={globalStyles.regularBottomSpace}
                        value={amount}
                        setValue={setAmount}
                    />
                    <Input 
                        leftTitle={strings.labels.discount}
                        rightTitle={strings.labels.optional}
                        containerStyle={globalStyles.regularBottomSpace}
                        value={discount}
                        setValue={setDiscount}
                        withWarning={errors[4] !== null}
                        errorText={errors[4]}
                    />
                    <Input 
                        leftTitle={strings.labels.unit}
                        placeholder={strings.placeholders.time}
                        withWarning={errors[3] !== null}
                        errorText={errors[3]}
                        containerStyle={globalStyles.regularBottomSpace}
                        value={unit}
                        setValue={setUnit}
                    />
                    <Dropdown 
                        leftTitle={strings.labels.tax}
                        placeholder={strings.placeholders.tax}
                        containerStyle={globalStyles.lastInputSpace}
                        data={taxes}
                        ref={taxRef}
                        setId={setTaxId}
                        id={taxId}
                        chosenEntityName={productDetails?.tax?.name}
                        errorText={errors[5]}
                    />
                    <Button 
                        color={WHITE}
                        text={strings.buttons.save}
                        customStyle={globalStyles.largeBottomPadding}
                        onPress={createProduct}
                    />
                </TouchableLayout>
            </KeyboardAwareScrollView>
        </BasicView>
    );
}

export default AddProductScreen;