export const checkInput = (user, place, arg, checkPolicy) => {
    let arr = [];
    if (place === 'auth') {
        if ((!user.login || user.login === '')) arr.push('login');
		if ((!user.password || user.password === '')) arr.push('password');
	}
	if (place === 'registr') {
		if (arg === '1') {
			if ((!user.first_name || user.first_name === '')) arr.push('first_name');
			if ((!user.last_name || user.last_name === '')) arr.push('last_name');
			if ((!user.login || user.login === '')) arr.push('login');
			if ((!user.inn || user.inn === '')) arr.push('inn');
			if ((!user.ogrn || user.ogrn === '')) arr.push('ogrn');
			if ((!user.email || user.email === '')) arr.push('email');
			if ((!user.password || user.password === '')) arr.push('password');
			if ((!user.password_repeat || user.password_repeat === '')) arr.push('password_repeat');
			if ((!user.about || user.about === '')) arr.push('about');
			if (!checkPolicy) arr.push('policy');
		}
		if (arg === '2') {
			if ((!user.first_name || user.first_name === '')) arr.push('first_name');
			if ((!user.last_name || user.last_name === '')) arr.push('last_name');
			if ((!user.login || user.login === '')) arr.push('login');
			if ((!user.inn || user.inn === '')) arr.push('inn');
			if ((!user.orgrnip || user.orgrnip === '')) arr.push('orgrnip');
			if ((!user.organization_name || user.organization_name === '')) arr.push('organization_name');
			if (!user.actual_address || user.actual_address === '') arr.push('actual_address');
			if (!user.legal_address || user.legal_address === '') arr.push('legal_address');
			if ((!user.email || user.email === '')) arr.push('email');
			if ((!user.password || user.password === '')) arr.push('password');
			if ((!user.password_repeat || user.password_repeat === '')) arr.push('password_repeat');
			if ((!user.about || user.about === '')) arr.push('about');
			if (!checkPolicy) arr.push('policy');
		}
	}
	if (place === 'addOrder') {
		if ((!user.command || user.command === '')) arr.push('command');
		if ((!user.demandsCommand || user.demandsCommand === '')) arr.push('demandsCommand');
		if ((!user.butget || user.butget === '')) arr.push('butget');
	}
	if (place === 'Purchase') {
		if ((!user.responsiblePerson || user.responsiblePerson === '')) arr.push('responsiblePerson');
		if ((!user.phone || user.phone === '')) arr.push('phone');
		if ((!user.offerAmount || user.offerAmount === '')) arr.push('offerAmount');
		if ((!user.termsOfCooperation || user.termsOfCooperation === '')) arr.push('termsOfCooperation');
	}
	return arr;
}