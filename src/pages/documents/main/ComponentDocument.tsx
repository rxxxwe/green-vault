import { useState } from "react";
import { Link } from "react-router-dom";
import s from "./ComponentDocument.module.scss";
import GlobalSvgSelector from "../../../assets/global/GlobalSvgSelector";
type Props = {};

export const ComponentDocument = (props: Props) => {
  const [isOpenEmail, setIsOpenEmail] = useState(false);
  const [isOpenWallet, setIsOpenWallet] = useState(false);

  const toggleEmailDropdown = () => {
    setIsOpenEmail(!isOpenEmail);
    setIsOpenWallet(false);
  };

  const toggleWalletDropdown = () => {
    setIsOpenWallet(!isOpenWallet);
    setIsOpenEmail(false);
  };

  return (
    <div className={s.content_document}>
      <div className={s.ref}>
        <div className={s.ref_item} onClick={toggleEmailDropdown}>
          antonzhdanovich@gmail.com
          <div
            className={`${s.dropdown} ${isOpenEmail ? s.dropdown_active : ""}`}
          >
            <div
              className={s.dropdown_item}
              onClick={() =>
                navigator.clipboard.writeText("antonzhdanovich@gmail.com")
              }
            >
              Copy Wallet
            </div>
            <div className={s.dropdown_item}>Disconnect</div>
          </div>
        </div>

        <div className={s.ref_item} onClick={toggleWalletDropdown}>
          QUBqS-7t...kG-3U8
          <div
            className={`${s.dropdown} ${isOpenWallet ? s.dropdown_active : ""}`}
          >
            <div
              className={s.dropdown_item}
              onClick={() => navigator.clipboard.writeText("QUBqS-7t...kG-3U8")}
            >
              Copy Wallet
            </div>
            <div className={s.dropdown_item}>Disconnect</div>
          </div>
        </div>
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
            <span className={s.filter_text}>Urgent</span>
          </label>
          <label className={s.filter_item}>
            <input
              type="checkbox"
              name="news"
              id="newsCheckbox"
              value="news"
              className={s.checkbox}
            />
            <span className={s.filter_text}>News</span>
          </label>
          <label className={s.filter_item}>
            <input
              type="checkbox"
              name="operations"
              id="operationsCheckbox"
              value="operations"
              className={s.checkbox}
            />
            <span className={s.filter_text}>Operations</span>
          </label>
          <label className={s.filter_item}>
            <input
              type="checkbox"
              name="documents"
              id="documentsCheckbox"
              value="documents"
              className={s.checkbox}
            />
            <span className={s.filter_text}>Documents</span>
          </label>
          <label className={s.filter_item}>
            <input
              type="checkbox"
              name="support"
              id="supportCheckbox"
              value="support"
              className={s.checkbox}
            />
            <span className={s.filter_text}>Support</span>
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
            <span className={s.icon_download}>
              <GlobalSvgSelector id="download" />
            </span>
            <Link to={"/"} className={s.text_download}>
              Download
            </Link>
          </div>
        </div>

        <div className={s.operation_card}>
          <h3>Withdrawal operation - success</h3>
          <p>
            Dear GreenVault platform user, we would like to inform you that your
            transaction to withdraw 5.639 ETH was successful. The funds
          </p>
          <div className={s.download}>
            <span className={s.icon_download}>
              <GlobalSvgSelector id="download" />
            </span>
            <Link to={"/"} className={s.text_download}>
              Download
            </Link>
          </div>
        </div>

        <div className={s.operation_card}>
          <h3>Withdrawal operation - success</h3>
          <p>
            Dear GreenVault platform user, we would like to inform you that your
            transaction to withdraw 5.639 ETH was successful. The funds
          </p>
          <div className={s.download}>
            <span className={s.icon_download}>
              <GlobalSvgSelector id="download" />
            </span>
            <Link to={"/"} className={s.text_download}>
              Download
            </Link>
          </div>
        </div>

        <div className={s.operation_card}>
          <h3>Withdrawal operation - success</h3>
          <p>
            Dear GreenVault platform user, we would like to inform you that your
            transaction to withdraw 5.639 ETH was successful. The funds
          </p>
          <div className={s.download}>
            <span className={s.icon_download}>
              <GlobalSvgSelector id="download" />
            </span>
            <Link to={"/"} className={s.text_download}>
              Download
            </Link>
          </div>
        </div>

        <div className={s.operation_card}>
          <h3>Withdrawal operation - success</h3>
          <p>
            Dear GreenVault platform user, we would like to inform you that your
            transaction to withdraw 5.639 ETH was successful. The funds
          </p>
          <div className={s.download}>
            <span className={s.icon_download}>
              <GlobalSvgSelector id="download" />
            </span>
            <Link to={"/"} className={s.text_download}>
              Download
            </Link>
          </div>
        </div>

        <div className={s.operation_card}>
          <h3>Withdrawal operation - success</h3>
          <p>
            Dear GreenVault platform user, we would like to inform you that your
            transaction to withdraw 5.639 ETH was successful. The funds
          </p>
          <div className={s.download}>
            <span className={s.icon_download}>
              <GlobalSvgSelector id="download" />
            </span>
            <Link to={"/"} className={s.text_download}>
              Download
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
