import GlobalSvgSelector from "../../../assets/global/GlobalSvgSelector";
import s from "./ComponentDocument.module.scss";
type Props = {};

export const ComponentDocument = (props: Props) => {
  return (
    <div className={s.content_document}>
      <div className={s.ref}>
        <div className={s.ref_item}>antonzhdanovich@gmail.com</div>
        <div className={s.ref_item}>QUBqS-7t...kG-3U8</div>
      </div>
      <div className={s.search_container}>
        <span className={s.search_icon}>
          <GlobalSvgSelector id="search" className="bi_search" />
        </span>
        <input
          type="search"
          className={s.search_input}
          placeholder="Search..."
        />
      </div>
      <div className={s.filters}>
        <div className={s.filters_container}>
          <span className={s.filters_label}>Filters:</span>
          <label className={s.filter_item}>
            <input
              type="checkbox"
              name="urgent"
              id="urgentCheckbox"
              value="urgent"
              className={s.checkbox}
            />
            <span className={s.filter_text}>Technical Docs</span>
          </label>
          <label className={s.filter_item}>
            <input
              type="checkbox"
              name="news"
              id="newsCheckbox"
              value="news"
              className={s.checkbox}
            />
            <span className={s.filter_text}>Account Statement</span>
          </label>
          <label className={s.filter_item}>
            <input
              type="checkbox"
              name="operations"
              id="operationsCheckbox"
              value="operations"
              className={s.checkbox}
            />
            <span className={s.filter_text}>Annual Reports</span>
          </label>
          <label className={s.filter_item}>
            <input
              type="checkbox"
              name="documents"
              id="documentsCheckbox"
              value="documents"
              className={s.checkbox}
            />
            <span className={s.filter_text}>Risk Disclosure</span>
          </label>
          <label className={s.filter_item}>
            <input
              type="checkbox"
              name="support"
              id="supportCheckbox"
              value="support"
              className={s.checkbox}
            />
            <span className={s.filter_text}>Legal Docs</span>
          </label>
        </div>
      </div>

      <div className={s.operation_container}>
        <div className={s.operation_card}>
          <h3>Withdrawal operation - success</h3>
          <p>
            Dear GreenVault platform user, we would like to inform you that your
            transaction to withdraw 5.639 ETH was successful. The funds
          </p>
          <div className={s.download}>
            <a>
              <span className={s.icon_download}>
                <GlobalSvgSelector id="download" />
              </span>
              <span className={s.text_download}>Download</span>
            </a>
          </div>
        </div>

        <div className={s.operation_card}>
          <h3>Withdrawal operation - success</h3>
          <p>
            Dear GreenVault platform user, we would like to inform you that your
            transaction to withdraw 5.639 ETH was successful. The funds
          </p>
          <div className={s.download}>
            <a>
              <span className={s.icon_download}>
                <GlobalSvgSelector id="download" />
              </span>
              <span className={s.text_download}>Download</span>
            </a>
          </div>
        </div>

        <div className={s.operation_card}>
          <h3>Withdrawal operation - success</h3>
          <p>
            Dear GreenVault platform user, we would like to inform you that your
            transaction to withdraw 5.639 ETH was successful. The funds
          </p>
          <div className={s.download}>
            <a>
              <span className={s.icon_download}>
                <GlobalSvgSelector id="download" />
              </span>
              <span className={s.text_download}>Download</span>
            </a>
          </div>
        </div>

        <div className={s.operation_card}>
          <h3>Withdrawal operation - success</h3>
          <p>
            Dear GreenVault platform user, we would like to inform you that your
            transaction to withdraw 5.639 ETH was successful. The funds
          </p>
          <div className={s.download}>
            <a>
              <span className={s.icon_download}>
                <GlobalSvgSelector id="download" />
              </span>
              <span className={s.text_download}>Download</span>
            </a>
          </div>
        </div>

        <div className={s.operation_card}>
          <h3>Withdrawal operation - success</h3>
          <p>
            Dear GreenVault platform user, we would like to inform you that your
            transaction to withdraw 5.639 ETH was successful. The funds
          </p>
          <div className={s.download}>
            <a>
              <span className={s.icon_download}>
                <GlobalSvgSelector id="download" />
              </span>
              <span className={s.text_download}>Download</span>
            </a>
          </div>
        </div>

        <div className={s.operation_card}>
          <h3>Withdrawal operation - success</h3>
          <p>
            Dear GreenVault platform user, we would like to inform you that your
            transaction to withdraw 5.639 ETH was successful. The funds
          </p>
          <div className={s.download}>
            <a>
              <span className={s.icon_download}>
                <GlobalSvgSelector id="download" />
              </span>
              <span className={s.text_download}>Download</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
