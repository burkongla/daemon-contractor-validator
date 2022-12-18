'reach 0.1';

const commonInterface = {
	displayFunds: Fun([UInt, Address], Null),
	displaySuppliers: Fun([Address], Null)
}

export const main = Reach.App(() => {

	const Offer = Object({
		description: "",
	})

	const Owner = Participant('Owner', {
		// Specify Creator interact interface here..............................
		...commonInterface,
		contractorAddress: Fun([], Address),
		informTimeOut: Fun([], Null)
	});
	const Contractor = Participant('Contractor', {
		//  Attacher's interact interface here
		...commonInterface,
		wagerToPay: Fun([], UInt)
	});
	const Supplier = API('Supplier', {
		submitOffer: Fun([Offer], Null)
	})
	//TODO: Add supplier verification Oracle.
	let timedOut = false;
	init();
	//The first one to publish deploys the contract the owner of the project who i will call someone who employs a contractor to build and estate but want does not trust the integrity of the contractor employed by a third party agent.Address.Address
	Owner.only(() => {
		const address = declassify(interact.contractorAddress());
	})
	Owner.publish(address);
	const Suppliers = new Map(Offer);
	commit();
	//The second one to publish always attaches.....Address
	//This line of code, the contractor take the wager expected to disburse and pay disbursement to supplier...
	Contractor.only(() => {
		enforce(address === this);
		const wagerDisbursement = declassify(interact.wagerToPay());
	})
	Contractor.publish(wagerDisbursement).pay(wagerDisbursement);
	commit();

	const [done, howMany] = parallelReduce([false, 0])
		.invariant(Suppliers.size() === howMany, "howMany accurate")
		.while(!done)
		.api_(Supplier.submitOffer, (offer) => {
			check(!done, "Submission period is over.");
			check(isNone(Supplier[this], "Already submitted an offer."));
			return [0, (ret) => {
				const supplier = this;
				require(isNone(Suppliers[this]));
				Suppliers[this] = offer;
				ret(true);

				return [false, howMany + 1];
			}]
		}).timeout(null, () => {
			Owner.publish();
			return [true, howMany];
		})

	// write your program here...
	Owner.only(() => {
		interact.informTimeOut()
	});
	Owner.publish();

	transfer(wagerDisbursement).to(address);
	commit();

	each([Owner, Contractor], () => {
		interact.displayFunds(wagerDisbursement, address);
	})

	exit();
});
