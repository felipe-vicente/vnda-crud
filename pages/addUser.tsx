import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FilledInput from '@material-ui/core/FilledInput';
import { withStyles } from '@material-ui/styles';
import { useStyles } from '../styles/FormStyles'
import { BootstrapInput } from '../styles/FormStyles';
import InputLabel from '@material-ui/core/InputLabel';
import Link from 'next/link';
import token from '../token';
axios.defaults.headers.common['Authorization'] = `Token token="${token}"`;
import axios from 'axios';


const AddUser = ({ classes }) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [externalCode, setExternalCode] = useState('');
    const [tags, setTags] = useState([]);

    const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target.value);
    }

    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const onRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setRole(e.target.value);
    }

    const onExternalCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setExternalCode(e.target.value);
    }

    const onTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const tags = e.target.value.split(',')
        setTags(tags);
    }

    const onUserSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post('https://cors-anywhere.herokuapp.com/https://demo.vnda.com.br/api/v2/users', {
            email: email,
            name: name,
            role: role,
            external_code: externalCode,
            tags: tags
          }) .then((response) => {
            console.log(response);
          })
          setEmail('');
          setName('');
          setExternalCode('');
    }


    return (
        <div className={classes.root}>
            <div className={classes.titleBox}>
                <Link href='/'>
                    <Typography variant='h4' className={classes.usersTitle}>Usuários</Typography>
                </Link>
            </div>

            <form onSubmit={onUserSubmit} className={classes.form}>
            <InputLabel shrink htmlFor="email-input">
                E-mail
            </InputLabel>
            <BootstrapInput id="email-input" value={email} onChange={onEmailChange} />
       

            <InputLabel shrink htmlFor="name-input">
                Nome
            </InputLabel>
            <BootstrapInput id="name-input" value={name} onChange={onNameChange}/>
       
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
            <BootstrapInput id="external-code-input" value={externalCode} onChange={onExternalCodeChange}/>

            <InputLabel shrink htmlFor="tags-input">
                Tags
            </InputLabel>
            <BootstrapInput id="tags-input" value={tags} onChange={onTagsChange}/>

            <Button type='submit' variant='outlined' className={classes.button}>Salvar</Button>
        </form>
    </div>
    )
}

export default withStyles(useStyles as any)(AddUser);