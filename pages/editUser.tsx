import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/styles';
import { useStyles } from '../styles/FormStyles'
import { BootstrapInput } from '../styles/FormStyles';
import Router from 'next/router';
import axios from 'axios';
import Link from 'next/link';



const EditUser = ({ user, classes }) => {
    const [email, setEmail] = useState(user.email);
    const [name, setName] = useState(user.name);
    const [role, setRole] = useState(user.role);
    const [externalCode, setExternalCode] = useState(user.external_code);
    const [tags, setTags] = useState(user.tags);

    const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target.value);
    }

    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setName(e.target.value);
    }

    const onRoleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setRole(e.target.value);
    }

    const onExternalCodeChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setExternalCode(e.target.value);
    }

    const onTagsChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setTags(e.target.value);
    }

    const onUserSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.patch(`https://cors-anywhere.herokuapp.com/https://demo.vnda.com.br/api/v2/users/${user.id}`, {
            email: email,
            name: name,
            role: role,
            external_code: externalCode,
            tags: tags
        }).then((response) => {
            console.log(response);
        })
        console.log('Form Submited');
        console.log(`Email: ${email}`);
        console.log(`Name: ${name}`);
        console.log(`Role: ${role}`);
        console.log(`External Code: ${externalCode}`);
        console.log(`Tags: ${tags}`);

        Router.push('/');
    }


    return (
        <div className={classes.root}>
            <div className={classes.titleBox}>
                <Link href='/'>
                    <Typography variant='h4' className={classes.usersTitle}>Usuários</Typography>
                </Link>
                <Typography variant='h4' className={classes.separation}>/</Typography>
                <Typography variant='h4' className={classes.email}>{user.email}</Typography>
            </div>

            <form onSubmit={onUserSubmit} className={classes.form}>
                <InputLabel shrink htmlFor="email-input">
                    E-mail
                </InputLabel>
                <BootstrapInput 
                    id="email-input" 
                    value={email} 
                    onChange={onEmailChange} 
                />


                <InputLabel shrink htmlFor="name-input">
                    Nome
                </InputLabel>
                <BootstrapInput 
                    id="name-input" value={name} 
                    onChange={onNameChange} 
                />

                <InputLabel shrink htmlFor="role">
                    Função
                </InputLabel>
                <Select
                    value={role}
                    onChange={onRoleChange}
                    input={<FilledInput name="role" id="role" />}
                    className={classes.input}
                >
                    <MenuItem value={0}>Gestor</MenuItem>
                    <MenuItem value={1}>Agente</MenuItem>
                    <MenuItem value={2}>Local</MenuItem>
                </Select>

                <InputLabel shrink htmlFor="external-code-input">
                    Código Externo
                </InputLabel>
                <BootstrapInput id="external-code-input" 
                    value={externalCode} 
                    onChange={onExternalCodeChange} 
                />

                <InputLabel shrink htmlFor="tags-input">
                    Tags
                </InputLabel>
                <BootstrapInput 
                    id="tags-input" 
                    value={tags} 
                    onChange={onTagsChange} 
                />

                <Button type='submit' variant='outlined' className={classes.button}>Salvar</Button>
            </form>
        </div>
    )
}
EditUser.getInitialProps = async ({ query }) => {
    const fetch = await axios(`https://cors-anywhere.herokuapp.com/https://demo.vnda.com.br/api/v2/users/${query.id}`);
    const user = fetch.data;
    console.log(user);
    return { user };
};
export default  withStyles(useStyles as any)(EditUser);;