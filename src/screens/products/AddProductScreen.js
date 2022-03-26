import React, {
    useCallback,
    useRef,
} from 'react';
import { ScrollView } from 'react-native';

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
import { languages } from '../../internationalization/languages';
import { TAXES } from '../../mocks';
import styles from '../screenStyle';

const AddProductScreen = () => {
    let taxRef = useRef(null);

    const closeDropdown = useCallback(() => {
        taxRef.current.isOpen && taxRef.current.closeDropdown();
    }, [taxRef]);

    return (
        <BasicView 
            containerStyle={[
                globalStyles.alignCenter, 
                globalStyles.flex,
            ]}
            headerComponent={<Header title={languages.addEntity.addProduct} />}
        >
            <ScrollView 
                style={[
                    globalStyles.flatListContainer,
                    globalStyles.addEntityScrollViewContainer,
                ]} 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={globalStyles.alignCenter}
            >
                <TouchableLayout callback={closeDropdown}>
                    <Input 
                        leftTitle={languages.labels.name}
                        placeholder={languages.placeholders.name}
                        errorText={languages.labels.errorText}
                        withWarning
                        containerStyle={globalStyles.regularBottomSpace}
                    />
                    <Input 
                        leftTitle={languages.labels.description}
                        rightTitle={languages.labels.optional}
                        placeholder={languages.placeholders.description}
                        containerStyle={globalStyles.regularBottomSpace}
                    />
                    <Input 
                        leftTitle={languages.labels.price}
                        placeholder={languages.placeholders.price}
                        errorText={languages.labels.errorText}
                        withWarning
                        containerStyle={globalStyles.regularBottomSpace}
                    />
                    <Input 
                        leftTitle={languages.labels.amount}
                        placeholder={languages.placeholders.amount}
                        errorText={languages.labels.errorText}
                        withWarning
                        containerStyle={globalStyles.regularBottomSpace}
                    />
                    <Input 
                        leftTitle={languages.labels.discount}
                        rightTitle={languages.labels.optional}
                        containerStyle={globalStyles.regularBottomSpace}
                    />
                    <Input 
                        leftTitle={languages.labels.unit}
                        placeholder={languages.placeholders.time}
                        errorText={languages.labels.errorText}
                        withWarning
                        containerStyle={globalStyles.regularBottomSpace}
                    />
                    <Dropdown 
                        leftTitle={languages.labels.tax}
                        placeholder={languages.placeholders.tax}
                        containerStyle={styles.lastInputSpace}
                        data={TAXES}
                        ref={taxRef}
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

export default AddProductScreen;