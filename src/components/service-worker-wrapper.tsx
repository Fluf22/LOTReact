import React, { useEffect, useState } from 'react';
import { Snackbar, Button } from '@material-ui/core';
import * as serviceWorkerRegistration from '../serviceWorkerRegistration';

const ServiceWorkerWrapper = () => {
	const [showReload, setShowReload] = useState(false);
	const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(null);

	const onSWUpdate = (registration: ServiceWorkerRegistration) => {
		setShowReload(true);
		setWaitingWorker(registration.waiting);
	};

	useEffect(() => {
		serviceWorkerRegistration.register({ onUpdate: onSWUpdate });
	}, []);

	const reloadPage = () => {
		waitingWorker?.postMessage({ type: 'SKIP_WAITING' });
		setShowReload(false);
		window.location.reload();
	};

	return (
		<Snackbar
			open={showReload}
			message="Nouvelle version disponible !"
			onClick={reloadPage}
			anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
			action={
				<Button
					color="inherit"
					size="small"
					onClick={reloadPage}
				>
					Mettre à jour
				</Button>
			}
		/>
	);
}

export default ServiceWorkerWrapper;
