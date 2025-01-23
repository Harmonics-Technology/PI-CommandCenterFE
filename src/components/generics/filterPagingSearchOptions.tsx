export const filterPagingSearchOptions = (ctx: any) => {
    // console.log({ ctx: ctx.query });

    const { limit, offset, search, from, to, paySlipFilter, status, client } =
        ctx.query;
    const options = {
        limit: limit,
        shiftLimit: limit ? limit : 5,
        offset: offset ? offset : 0,
        search: search ? search : '',
        from: from ? from : '',
        to: to ? to : '',
        paySlipFilter: paySlipFilter ? paySlipFilter : '',
        status: status,
        client: client,
        // chartYear: chartYear ? chartYear : moment(new Date()).format('YYYY'),
    };
    // console.log({ options });
    return options;
};
