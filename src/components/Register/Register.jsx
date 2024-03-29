import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Button, Form, Input, Label } from './Register.styled';

const Register = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();

        const form = e.currentTarget;

        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );

        form.reset();
    };

    return (
        <Form autoComplete="off" onSubmit={handleSubmit}>
            <Label>
                Username
                <Input type="text" name="name" />
            </Label>
            <Label>
                Email
                <Input type="email" name="email" />
            </Label>
            <Label>
                Password
                <Input type="password" name="password" />
            </Label>
            <Button type="submit">Register</Button>
        </Form>
    );
};

export default Register;