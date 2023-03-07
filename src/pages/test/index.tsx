import React, { Suspense, useCallback, useState } from 'react';
import { RegularButton, TextButton, LinkButton } from 'shared/inputs/button'
import { RegularCheckbox } from 'shared/inputs/checkbox';
import { RegularTextField } from 'shared/inputs/textField';

const TestPage = () => {
    const [testCheckbox, setTestCheckbox] = useState(false);
    const [testTextField, setTestTextField] = useState('');

    const testClick = useCallback(() => {
        console.log('test');
    }, []);

    const testClickCheckbox = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setTestCheckbox(event.target.checked);
    }, []);

    const testClickTextField = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setTestTextField(event.target.value);
    }, []);

    return <Suspense fallback={<div>Loading...</div>}>
        <div>Test Page</div>
        <RegularButton
            color="success"
            onClick={ testClick }
        >
            test
        </RegularButton>
        <TextButton
            onClick={ testClick }
        >
            text
        </TextButton>
        <LinkButton
            onClick={ testClick }
            href='/test'
        >
            Link to /
        </LinkButton>
        <RegularCheckbox
            id="test-checkbox"
            value={ testCheckbox }
            onChange={ testClickCheckbox }
        />
        <RegularTextField
            id="test-text-field"
            value={ testTextField }
            placeholder='Enter test text'
            onChange={ testClickTextField }
        />
    </Suspense>
}

export default TestPage;